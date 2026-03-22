/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
const primary = "#2E7D52";
const primaryLight = "#4CAF78";
const primaryDark = "#1B5E38";

export const Colors = {
  light: {
    icon: "#687076",

    text: "#1A1A1A",
    textSecondary: "#6B7280",
    textTertiary: "#9CA3AF",
    background: "#FAFAF8",
    backgroundSecondary: "#F3F4EF",
    card: "#FFFFFF",
    cardBorder: "#E8EAE4",
    tint: primary,
    tintLight: primaryLight,
    tintDark: primaryDark,
    tabIconDefault: "#9CA3AF",
    tabIconSelected: primary,
    success: "#2E7D52",
    warning: "#D97706",
    error: "#DC2626",
    breakfast: "#F59E0B",
    lunch: "#3B82F6",
    dinner: "#8B5CF6",
    separator: "#E8EAE4",
  },
  dark: {
    text: "#F9FAFB",
    textSecondary: "#9CA3AF",
    textTertiary: "#6B7280",
    background: "#0F1410",
    backgroundSecondary: "#1A211C",
    card: "#1C2620",
    cardBorder: "#2D3C32",
    tint: primaryLight,
    tintLight: "#6FD49A",
    tintDark: primary,
    tabIconDefault: "#6B7280",
    tabIconSelected: primaryLight,
    success: "#4CAF78",
    warning: "#FCD34D",
    error: "#F87171",
    breakfast: "#FCD34D",
    lunch: "#60A5FA",
    dinner: "#A78BFA",
    separator: "#2D3C32",
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
