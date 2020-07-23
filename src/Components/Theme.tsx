import { createText, createBox } from "@shopify/restyle";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");
const theme = {
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    danger: "#FF0058",
    text: "rgba(12,13,52,0.7)",
    white: "white",
    grey: "rgba(12,13 ,52,0.05)",
    LightGrey: "#F4F0EF",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 55,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
    xxl: 95,
  },
  textVariants: {
    hero: {
      fontSize: height / 12,
      color: "white",
      lineHeight: 80,
      fontFamily: "SFProDisplay-Bold",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
      color: "text",
    },
    button: {
      fontSize: 15,
      fontFamily: "SFProDisplay-Medium",
      color: "text",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
