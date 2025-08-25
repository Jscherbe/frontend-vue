# Core Plugin

## Why is it named "Core"?

While the plugin currently manages settings primarily related to the icon system (`UluIcon`), it is named `corePlugin` for two key reasons:

1.  **Fundamental Dependency**: The icon system is a fundamental dependency for a vast majority of the components in this library. Proper configuration is essential for the library to work as expected. Therefore, its setup is considered a core part of the library's installation.
2.  **Future Extensibility**: This plugin is designed to be the home for any future cross-cutting concerns or global configurations (such as theming, internationalization, etc.). This provides a single, predictable entry point for all essential library setup.