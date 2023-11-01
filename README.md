# Maven Package Automation

Automate the packaging process for Maven projects within Visual Studio Code.

## Extension Settings

This extension contributes the following settings:

- `mavenPackageAuto.enable`: Enable/disable this extension.
- `mavenPackageAuto.maven.executable.options`: specify you own build of your maven project, by adding your options.

## Features

The Maven Package Automation extension currently provides the following features to streamline your Maven project development workflow:

- **Custom Maven Arguments**: Add custom arguments through the `mavenPackageAuto.maven.executable.options` setting for specific project configurations.
- **Automatic Save and Package**: Automatically save all files in the project when a file is saved, capturing changes before executing the Maven package command.
- **Status Messages**: Receive informative status messages in Visual Studio Code's notification area, indicating the presence of the `pom.xml` file.

## Usage

To configure the Maven Package Automation extension, follow these steps:

1. Open the `settings.json` file in maven project in Visual Studio Code. if you can't find it then just create it with the name setting.json
2. Find the `mavenPackageAuto.maven.executable.options` setting, if its not there then you can just add it.
3. Add Maven arguments separated by spaces to specify the build process, such as "clean validate package" or any other desired commands.
4. Now its all set-up, the extension can now automate your maven project build, when its saved
5. You can check out the image guide, to help you, if you didnt configure it successfully.[image guide](images/options%20added.png) , [image guide2](images/whenprojectissaved.png)


### Upcoming Features

In the upcoming release, we plan to introduce the following feature:

- **Hot Reload (Upcoming)**: Enable automatic reloading of changes in the local application without the need for manual redeployment to a tomcat server, just like live server.

## Requirements

Before using the Maven Package Automation tool, ensure that the following requirements are met:

- `pom.xml` File: Verify that the `pom.xml` file exists in your project's root directory.

Please stay tuned for the upcoming release, which will include the highly anticipated hot reload functionality for seamless code deployment.

## Release Notes

For the latest release notes and updates, please refer to the GitHub repository.

## License

This extension is licensed under the MIT License.

## Contributing

Contributions are welcome! To contribute to the project, follow the guidelines in the `CONTRIBUTING.md` file.

## Attribution

If you use this software in your projects, we kindly request that you provide attribution to the original author(s) by including the following notice:

"This project utilizes the Maven Package Automation extension, created by Thompson Oretan."

You can place this notice in the documentation, about page, or any appropriate location within your project.

Thank you for respecting the work and contribution of the original author(s).

Enjoy!
