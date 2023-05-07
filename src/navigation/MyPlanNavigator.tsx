import React from "react";
import { View, Text, Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import MyPlanScreen from "../screens/MyplanScreen";
import MyPlanDetailScreen from "../screens/MyplanScreen/MyPlanDetailScreen";
import { useNavigation } from "@react-navigation/native";

import MyPlanUpsertScreen from "../screens/MyplanScreen/MyPlanUpsertScreen";
import { Navigation } from ".";

const Stack = createNativeStackNavigator();
const MyPlanNavigator = () => {
  const Navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerRight,
        }}
        name="MyPlans"
        component={MyPlanScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Detail"
        component={MyPlanDetailScreen}
      />
      <Stack.Screen
        options={{ title: "Creer un nouveau plan" }}
        name="Creer"
        component={MyPlanUpsertScreen}
      />
    </Stack.Navigator>
  );
};

const headerRight = () => {
  const navigation: any = useNavigation();
  return (
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => navigation.navigate("Creer")}
    >
      <Ionicons name="ios-create-outline" size={24} color="black" />
      <Text style={{ padding: 5 }}>Creer</Text>
    </Pressable>
  );
};

export default MyPlanNavigator;
