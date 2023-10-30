const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

let mavenTerminal;
let isAutomaticPackageEnabled;
let pomXmlChecked = false;
 
function activate(context) {
  isAutomaticPackageEnabled = vscode.workspace.getConfiguration().get('mavenPackageAuto.enable');
  // Register the listener for the onDidSaveTextDocument event
  vscode.workspace.onDidSaveTextDocument(() => {
     vscode.workspace.saveAll().then(() => {
      // Check if there is a workspace folder
      if (isAutomaticPackageEnabled) {
        if (vscode.workspace.workspaceFolders !== undefined) {
          // Get the path (location) of the workspaceFolder
          const workspaceFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;
          // Join the "pom.xml" to the path so we can access the location of the pom.xml file for validation
          const pomXmlPath = path.join(workspaceFolder, 'pom.xml');

          fs.access(pomXmlPath, fs.constants.F_OK, (err) => {
            if (!err) {
              if (!pomXmlChecked) {
                vscode.window.showInformationMessage('pom.xml file exists in the project.');
                pomXmlChecked = true;
              }
              if (pomXmlChecked) {
                const customArgs = vscode.workspace.getConfiguration().get('maven.executable.options');
                let commandPackage =  'packcage';
                if (customArgs && customArgs.length > 0) {
                  commandPackage = commandPackage.concat(' ').concat(customArgs);
                }
                executeMavenCommand(commandPackage);
              }
            } else {
              return null;
            }
          });
        } else {
          return vscode.window.showInformationMessage('Not A Maven Project');;
        }
      }
    })
   
  });
  let toggleButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  toggleButton.text = "$(play) mvn-package: On";
  toggleButton.command = 'extension.toggleAutomaticPackage';
  toggleButton.show();

  // Add a command handler for the toggle button
  context.subscriptions.push(vscode.commands.registerCommand('extension.toggleAutomaticPackage', () => {
    isAutomaticPackageEnabled = !isAutomaticPackageEnabled;
    toggleButton.text = isAutomaticPackageEnabled ? "$(play) mvn-package: On" : "$(stop) mvn-package: Off";
  }));

  context.subscriptions.push(vscode.commands.registerCommand('extension.mavenbuild', () => {
    executeMavenCommand("package");
  }));
}

 
function executeMavenCommand(command) {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders || workspaceFolders.length === 0) {
    vscode.window.showErrorMessage('No workspace folder found.');
    return;
  }

  if (!mavenTerminal) {
    const workspaceFolder = workspaceFolders[0];
    mavenTerminal = vscode.window.createTerminal({
      name: "mvn-package-auto",
      cwd: workspaceFolder.uri.fsPath,
    });
  }

  mavenTerminal.show();
  mavenTerminal.sendText(`mvn ${command}`);
}

function deactivate() { }

module.exports = {
  activate,
  deactivate
};
