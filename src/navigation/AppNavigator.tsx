import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import MyPlanNavigator from "./MyPlanNavigator";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();
const firstRouteName: string[] = ["Home", "MyPlans", ""];

const options = ({ route }): any => ({
  tabBarStyle: ((route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "";

    if (!firstRouteName.includes(routeName)) {
      return { display: "none" };
    }
    return;
  })(route),
  headerShown: false,
});

export const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name="HomeStack" component={HomeNavigator} />
      <Tab.Screen name="MyPlanStack" component={MyPlanNavigator} />
      <Tab.Screen name="TransactionStack" component={() => null} />
      <Tab.Screen name="Synthesis" component={() => null} />
    </Tab.Navigator>
  );
};
