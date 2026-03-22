import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type FormFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  numberOfLines?: number;
  testID: string;
};

const FormField = ({
  label,
  placeholder,
  value,
  onChangeText,
  multiline = false,
  numberOfLines = 1,
  testID,
}: FormFieldProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        testID={testID}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#6F7D76"
        multiline={multiline}
        numberOfLines={numberOfLines}
        textAlignVertical={multiline ? "top" : "center"}
        style={[styles.input, multiline ? styles.inputMultiline : null]}
      />
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
  },
  label: {
    color: "#D7E5DD",
    fontSize: 15,
    fontWeight: "600",
  },
  input: {
    minHeight: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#22352C",
    backgroundColor: "#101B16",
    color: "#ECF3EF",
    fontSize: 15,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  inputMultiline: {
    minHeight: 96,
  },
});
