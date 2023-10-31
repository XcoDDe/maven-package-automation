const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

//Define Variables
let mavenTerminal;
let isAutomaticPackageEnabled;
let pomXmlChecked = false;
 

//Function to activate the extension
function activate(context) {

  //Get configuration settings
  isAutomaticPackageEnabled = vscode.workspace.getConfiguration().get('mavenPackageAuto.enable');
 
  // Check if automatic packaging is enabled and if the workspace has folders
  if (isAutomaticPackageEnabled && vscode.workspace.workspaceFolders !== undefined) {
    //Gets the workspace folder and path of the pom.xml file
    const workspaceFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;
    const pomXmlPath = path.join(workspaceFolder, 'pom.xml');

    //Checks if the pom.xml file exists
    fs.access(pomXmlPath, fs.constants.F_OK, (err) => {
      if (!err) {
        if (!pomXmlChecked) {
          //show message if pom.xml file exists
          vscode.window.showInformationMessage('pom.xml file exists in the project.');
          pomXmlChecked = true;
        }

        //add an event listener for file save
        if (pomXmlChecked) {
           
          vscode.workspace.onDidSaveTextDocument((document) => {

            const savedFilePath = document.fileName.toLowerCase(); //gets the current file location.
            const configSettingsPath = ".vscode\\settings.json"; // the location of the settings.json file.
            
            //checks if the current file ends with the .vscode\settings.json
            if(!savedFilePath.endsWith(configSettingsPath))
            {
              vscode.workspace.saveAll().then(() => {
                let commandPackage = 'package';
                let customArgs = vscode.workspace.getConfiguration().get('mavenPackageAuto.maven.executable.options');
                commandPackage = commandPackage.concat(' ').concat(customArgs);
                executeMavenCommand(commandPackage);
                // Check if there is a workspace folder
              });
            
            }
              
          });
          
         //runs the command when ever the .vscode\settings.json is changed
         vscode.workspace.onDidChangeConfiguration(() => {
              isConfigurationChanged = true;
              let commandPackage = 'package';
              let customArgs = vscode.workspace.getConfiguration().get('mavenPackageAuto.maven.executable.options');
              commandPackage = commandPackage.concat(' ').concat(customArgs);
              executeMavenCommand(commandPackage);
      
          });
        }
      } 
    });
  }

  //A toggleButton to of or on the extension
  let toggleButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  toggleButton.text = "$(play) mvn-package: On";
  toggleButton.command = 'extension.toggleAutomaticPackage';
  toggleButton.show();

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

  console.log(command);
  mavenTerminal.show();
  mavenTerminal.sendText(`mvn ${command}`);

}

function deactivate() { }

module.exports = {
  activate,
  deactivate
};
