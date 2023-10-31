# Change Log

All notable changes to the "maven-package-automation" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [1.0.0] - 2023-07-06

- Initial release

## [1.1.0] - 2023-07-06

- Added feature to enable/disable automatic mvn-package command

## [1.1.1] - 2023-07-07

- Fixed the disturbing prompt `pom.xml file exists in the project` that developers experienced every time the Maven project was saved.

- Save all files in the project automatically when a file is saved. This ensures that all changes are captured before executing the Maven package command. No need to manually save each file separately.

## [1.1.2] - 2023-10-31

Custom Maven Arguments: Added support for custom Maven arguments through the `mavenPackageAuto.maven.executable.options` setting. Users can now customize Maven commands with specific arguments to tailor the build process according to project requirements.
