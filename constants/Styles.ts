const tintColorLight = "#FFF160"; // Bright Yellow
const tintColorDark = "#FFF160"; // Same tint for dark mode, unless you want a dimmer one

export const Colors = {
  light: {
    primary: tintColorLight,
    button: "#1E3006",
    secondary: "#8E8E8E",
    text: "#111111", // Dark text for readability
    background: "#FFFFFF", // White background
    tint: tintColorLight, // Yellow highlight
    icon: "#030000", // Dark icons
    tabIconDefault: "#5F5F5F", // Gray for inactive tabs (optional)
    tabIconSelected: tintColorLight, // Yellow for active tabs
  },
  dark: {
    primary: tintColorLight,
    button: "#1E3006",
    secondary: "#8E8E8E",
    text: "#111111", // Dark text for readability
    background: "#FFFFFF", // White background
    tint: tintColorLight, // Yellow highlight
    icon: "#030000", // Dark icons
    tabIconDefault: "#5F5F5F", // Gray for inactive tabs (optional)
    tabIconSelected: tintColorLight, // Yellow for active tabs
  },
};

export const ThemeStyles = {
  borderRadus: {
    default: 8,
  },
};
