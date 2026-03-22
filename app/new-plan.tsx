import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FormField from "@/components/meal-plan/form-field";

const NewPlanScreen = () => {
  const router = useRouter();
  const [planName, setPlanName] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [preferences, setPreferences] = useState("");

  const isCreateDisabled = useMemo(() => {
    return !planName.trim() || !peopleCount.trim();
  }, [peopleCount, planName]);

  const onClose = () => {
    router.back();
  };

  const onCreate = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea} testID="create-meal-plan-screen">
      <View style={styles.header}>
        <Text style={styles.title}>Create Meal Plan</Text>
        <Pressable
          accessibilityRole="button"
          testID="new-plan-close-button"
          onPress={onClose}
          style={({ pressed }) => [styles.closeButton, pressed ? styles.pressed : null]}>
          <MaterialIcons name="close" size={20} color="#D8E6DE" />
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.subtitle}>Set up your week in seconds.</Text>

        <FormField
          label="Plan name"
          placeholder="e.g. Family weekly plan"
          value={planName}
          onChangeText={setPlanName}
          testID="new-plan-name-input"
        />

        <FormField
          label="People count"
          placeholder="e.g. 4"
          value={peopleCount}
          onChangeText={setPeopleCount}
          testID="new-plan-people-input"
        />

        <FormField
          label="Preferences"
          placeholder="e.g. vegetarian dinners, high protein lunches"
          value={preferences}
          onChangeText={setPreferences}
          multiline
          numberOfLines={4}
          testID="new-plan-preferences-input"
        />
      </ScrollView>

      <View style={styles.footer}>
        <Pressable
          accessibilityRole="button"
          testID="new-plan-create-button"
          disabled={isCreateDisabled}
          onPress={onCreate}
          style={({ pressed }) => [
            styles.createButton,
            isCreateDisabled ? styles.createButtonDisabled : null,
            pressed && !isCreateDisabled ? styles.pressed : null,
          ]}>
          <Text style={styles.createButtonText}>Create plan</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default NewPlanScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#070E0B",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "#EEF4F1",
    fontWeight: "700",
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#22352C",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0E1713",
  },
  content: {
    gap: 18,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 18,
  },
  subtitle: {
    color: "#8C9891",
    fontSize: 15,
    marginBottom: 6,
  },
  footer: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#22352C",
    backgroundColor: "#070E0B",
  },
  createButton: {
    minHeight: 52,
    borderRadius: 14,
    backgroundColor: "#54C591",
    alignItems: "center",
    justifyContent: "center",
  },
  createButtonDisabled: {
    opacity: 0.45,
  },
  createButtonText: {
    color: "#E7FBF1",
    fontSize: 17,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.9,
  },
});
