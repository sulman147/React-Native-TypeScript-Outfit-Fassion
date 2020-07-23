import React from "react";
import { Image, Dimensions } from "react-native";

import { Box, Text } from "../../Components/Theme";
import { Button } from "../../Components";
import { StackNavigationProps, Routes } from "../../Components/Navigation";

const { width, height } = Dimensions.get("window");
const picture = {
  src: require("../../../assets/2.png"),
  width: 2513,
  height: 3583,
};
export const assets = [picture.src];
const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        overflow="hidden"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            marginLeft: 50,
            marginTop: 0,
            width: width / 2,
            height: height / 2,
            // width: width - theme.borderRadii.xl,
            // height: ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderBottomLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          flex={1}
          padding="l"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            variant="transparent"
            label="Join us, it's Free"
            onPress={() => true}
          />
          <Button
            variant="transparent"
            label="Forgot password"
            onPress={() => alert("check your email")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
