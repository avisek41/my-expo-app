import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type HomeHeaderProps = {
  title: string;
  subtitle: string;
  onPressAdd: () => void;
};

const HomeHeader = ({ title, subtitle, onPressAdd }: HomeHeaderProps) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Pressable
        accessibilityRole="button"
        testID="home-add-button"
        onPress={onPressAdd}
        style={({ pressed }) => [styles.addButton, pressed ? styles.addButtonPressed : null]}>
        <MaterialIcons name="add" size={32} color="#E3FFF1" />
      </Pressable>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 48 / 2,
    lineHeight: 56 / 2,
    color: "#F1F5F4",
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 8 / 2,
    fontSize: 34 / 2,
    lineHeight: 42 / 2,
    color: "#7D8488",
    fontWeight: "500",
  },
  addButton: {
    height: 92 / 2,
    width: 92 / 2,
    borderRadius: 999,
    backgroundColor: "#54C591",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonPressed: {
    opacity: 0.9,
  },
});
