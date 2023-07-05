const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

let mavenTerminal;

function activate(context) {
  // Register the listener for the onDidSaveTextDocument event
  vscode.workspace.onDidSaveTextDocument(() => {
    // Check if there is a workspace folder
    if (vscode.workspace.workspaceFolders !== undefined) {
      // Get the path (location) of the workspaceFolder
      const workspaceFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;
      // Join the "pom.xml" to the path so we can access the location of the pom.xml file for validation
      const pomXmlPath = path.join(workspaceFolder, 'pom.xml');

      fs.access(pomXmlPath, fs.constants.F_OK, (err) => {
        if (!err) {
          vscode.window.showInformationMessage('pom.xml file exists in the project.');
          executeMavenCommand("package");
        } else {
          return null;
         }
      });
    } else {
      return null;
     }
  });

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
      name: "Maven",
      cwd: workspaceFolder.uri.fsPath,
    });
  }

  mavenTerminal.show();
  mavenTerminal.sendText(`mvn ${command}`);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
