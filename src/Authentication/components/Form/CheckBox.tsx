import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text } from "../../../Components/Theme";

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckBox = ({ label, onChange, checked }: CheckBoxProps) => {
  return (
    <RectButton onPress={() => onChange()} style={{ justifyContent: "center" }}>
      <Box flexDirection="row" alignItems="center">
        <Box
          marginRight="s"
          borderRadius="s"
          height={20}
          width={20}
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          backgroundColor={checked ? "primary" : "white"}
          borderColor="primary"
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default CheckBox;
