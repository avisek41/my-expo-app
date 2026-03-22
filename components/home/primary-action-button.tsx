import React from "react";
import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type PrimaryActionButtonProps = {
  label: string;
  onPress: () => void;
  testID?: string;
  style?: ViewStyle;
};

const PrimaryActionButton = ({ label, onPress, testID, style }: PrimaryActionButtonProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      testID={testID}
      onPress={onPress}
      style={({ pressed }) => [styles.button, style, pressed ? styles.buttonPressed : null]}>
      <MaterialIcons name="add" size={22} color="#DDFBEA" />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default PrimaryActionButton;

const styles = StyleSheet.create({
  button: {
    minHeight: 64,
    borderRadius: 20,
    paddingHorizontal: 26,
    backgroundColor: "#54C591",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  label: {
    fontSize: 36 / 2,
    fontWeight: "700",
    color: "#DDFBEA",
  },
});
