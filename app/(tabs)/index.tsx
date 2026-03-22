import React from "react";
import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeEmptyState from "@/components/home/home-empty-state";
import HomeHeader from "@/components/home/home-header";

const HomeScreen = () => {
  const router = useRouter();

  const onCreateMealPlan = () => {
    router.push("../new-plan");
  };

  return (
    <SafeAreaView style={styles.safeArea} testID="home-screen">
      <View style={styles.container}>
        <HomeHeader title="Meal Planner" subtitle="Plan your week" onPressAdd={onCreateMealPlan} />
        <View style={styles.centerContainer}>
          <HomeEmptyState onPressCreatePlan={onCreateMealPlan} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#070E0B",
  },
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 14,
    paddingBottom: 16,
    backgroundColor: "#070E0B",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 74,
  },
});
