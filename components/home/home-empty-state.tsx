import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import PrimaryActionButton from "./primary-action-button";

type HomeEmptyStateProps = {
  onPressCreatePlan: () => void;
};

const HomeEmptyState = ({ onPressCreatePlan }: HomeEmptyStateProps) => {
  return (
    <View style={styles.wrapper} testID="home-empty-state">
      <View style={styles.iconContainer}>
        <MaterialIcons name="calendar-today" size={42} color="#55C992" />
      </View>
      <Text style={styles.title}>No meal plans yet</Text>
      <Text style={styles.description}>
        Create your first weekly plan and let AI generate delicious, budget-friendly meals for
        you.
      </Text>
      <PrimaryActionButton
        testID="home-create-plan-button"
        label="Create meal plan"
        onPress={onPressCreatePlan}
        style={styles.button}
      />
    </View>
  );
};

export default HomeEmptyState;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
  },
  iconContainer: {
    width: 124 / 2,
    height: 124 / 2,
    borderRadius: 24,
    backgroundColor: "#112C22",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 44 / 2,
    color: "#EEF3F5",
    fontSize: 64 / 2,
    lineHeight: 72 / 2,
    fontWeight: "700",
  },
  description: {
    marginTop: 20 / 2,
    color: "#8E949A",
    fontSize: 38 / 2,
    lineHeight: 52 / 2,
    textAlign: "center",
    maxWidth: 335,
    fontWeight: "500",
  },
  button: {
    marginTop: 58 / 2,
    minWidth: 286,
  },
});
