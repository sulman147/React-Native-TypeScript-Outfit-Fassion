import React from "react";
import { View } from "react-native";

import Svg, { Path, LinearGradient, Stop } from "react-native-svg";
import theme, { Box } from "../../Components/Theme";

const SIZE = theme.borderRadii.l * 2;
const Google = () => (
  <Svg width={25} height={25} viewBox="0 0 533.5 544.3">
    <Path
      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
      fill="#4285f4"
    />
    <Path
      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
      fill="#34a853"
    />
    <Path
      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
      fill="#fbbc04"
    />
    <Path
      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
      fill="#ea4335"
    />
  </Svg>
);
const Facebook = () => (
  <Svg height={45} viewBox="0 0 533.5 544.3" width={45}>
    <LinearGradient
      gradientTransform="matrix(1 0 0 -1 -41.66 349.04)"
      gradientUnits="userSpaceOnUse"
      id="prefix__a"
      x1={213.216}
      x2={363.21}
      y1={198.894}
      y2={48.901}
    >
      <Stop offset={0} stopColor="#3b5998" />
      <Stop offset={1} stopColor="#369" />
    </LinearGradient>
    <Path
      d="M277.41 400.519V272.058h42.82l10.705-53.525H277.41v-21.41c0-21.41 10.726-32.115 32.115-32.115h21.41v-53.525h-42.82c-39.341 0-64.23 30.841-64.23 74.935v32.115h-42.82v53.525h42.82v128.46l53.525.001z"
      fill="url(#prefix__a)"
    />
  </Svg>
);

const Apple = () => (
  <Svg width={30} height={30} fill="black" viewBox="0 0 533.5 544.3">
    <Path d="M448.7 174.8c-8 6.8-16 12.7-22.9 19.6-35.7 35.9-37.9 89.7-20.2 126.7 11.3 23.6 29.2 40.6 52.6 52 3.6 1.8 4.4 3.3 3 7.2-11.4 31.4-26.9 60.5-48.2 86.4-6.6 8.1-13.5 16.1-21 23.4-15.3 14.9-33.6 21.4-54.9 16.7-9.1-2-18.3-4.3-26.7-8.1-26.1-11.7-52.3-12.8-79.2-3.5-11.8 4.1-23.5 8.5-35.5 11.7-18.7 5.1-35.2-.1-49.5-12.8-21.4-18.8-38-41.3-52.3-65.8-18.4-31.7-30.6-65.8-37.4-101.7-6.7-35.4-7.6-70.8 3.2-105.8 7-22.6 18-43 35.4-59.4 27.4-25.9 59.7-38.1 97.3-32.3 13.5 2.1 26.8 6.9 39.4 12.4 17.4 7.5 33.9 10.1 51.9 1.8 15.2-7 31.2-12.6 47.9-15.4 33.1-5.5 63.1 1.9 90.7 20.6 10.7 7.1 19.8 15.7 26.4 26.3zM357.7 4.3c.8 16-1.5 30.8-6.1 45.3-7.9 24.9-24.2 43.6-44.8 58.3-13.4 9.5-29.1 13.5-45.8 13.2-3.9-.1-5-1.4-5.1-5.2-.6-25.7 7.4-48.4 23.4-68.4 19.1-23.7 43.9-37.6 73.8-42.9 1.3-.1 2.6-.1 4.6-.3z" />
  </Svg>
);

const SocialIcon = ({ children }: SocialIconProps) => {
  return (
    <Box
      marginHorizontal="s"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};
const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
