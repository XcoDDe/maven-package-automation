# maven-package-automation README

Automatically package and deploy Maven projects to a Tomcat server when the project is saved in Visual Studio Code.

## Extension Settings

This extension contributes the following settings:

- `mavenPackageAuto.enable`: Enable/disable this extension.

## Activation Events

This extension is automatically activated when the Visual Studio Code workspace is fully loaded.

## Known Issues

- None at the moment. Please report any issues or bugs on the [GitHub repository](https://github.com/XcoDDe/maven-package-automation/issues).


## Features

.The Maven Package Automation extension provides the following features to streamline your Maven project development workflow:

.Automatic Package and Deploy: When you save your Maven project, the extension automatically executes the mvn package command, generating the updated WAR file.

.Tomcat Server Integration: Seamlessly deploy your Maven project to a Tomcat server. The extension integrates with the Community Server Connector extension, ensuring smooth deployment and server synchronization.

.Status Messages: Receive informative status messages in Visual Studio Code's notification area, indicating whether the `pom.xml` file exists,if the file doesn't exists it does not bring any notification, if it does it says 'pom.xml file exists in the project.'
 
## Requirements

1.Before using the Maven Package Automation tool, ensure that the following requirements are met:

2.Maven Project: Make sure your project is set up as a Maven project. This means having a valid pom.xml file in the root directory of your project.

3.pom.xml File: Verify that the pom.xml file exists in your project's root directory. This file is essential for Maven to manage dependencies and build the project.

4.Tomcat Server: To automatically package and deploy your project to a Tomcat server, ensure that the Tomcat server is up and running. You should have a configured Tomcat server on your machine.

5.Community Server Connector: Install the latest version of the "Community Server Connector" extension in Visual Studio Code. This extension allows seamless integration with Tomcat servers and facilitates deploying your application's WAR file.

Note: The Maven Package Automation tool has been tested using the Community Server Connector with a Tomcat server.

Make sure to fulfill these requirements to ensure the smooth operation of the Maven Package Automation tool.
 
## Release Notes

 
### 1.0.0
.Initial release of Maven Package Automation tool.

.Automatically runs the `mvn package` command when the project is saved.

.Provides seamless integration with Maven projects in Visual Studio Code.

## Contributing

Contributions are welcome! To contribute to the project, follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This extension is licensed under the [MIT License](LICENSE).


## Working with Markdown

You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

## Attribution

If you use this software in your projects, we kindly request that you provide attribution to the original author(s) by including the following notice:

"This project utilizes the [maven-package-automation](https://github.com/XcoDDe/maven-package-automation) extension, created by Thompson Oretan."

You can place this notice in the documentation, about page, or any appropriate location within your project.

Thank you for respecting the work and contribution of the original author(s).

 **Enjoy!**
  