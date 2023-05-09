import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import MyPlanNavigator from "./MyPlanNavigator";
import HomeNavigator from "./HomeNavigator";
import TransactionNavigator from "./TransactionNavigator";

const Tab = createBottomTabNavigator();
const firstRouteName: string[] = ["Home", "Plans", "", "Transactions"];

const options = ({ route }): any => ({
  //bottom tab style
  tabBarStyle: ((route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "";

    if (!firstRouteName.includes(routeName)) {
      return { display: "none" };
    }
    return;
  })(route),

  //bottom tab icon
  tabBarIcon: ({ color, size }) => {
    if (route.name === "HomeStack") {
      return <Entypo name="home" size={size} color={color} />;
    } else if (route.name === "MyPlan") {
      return <AntDesign name="carryout" size={24} color={color} />;
    } else if (route.name === "Transaction") {
      return (
        <MaterialCommunityIcons name="bank-transfer" size={37} color={color} />
      );
    }
  },
  tabBarActiveTintColor: "blue",
  tabBarInactiveTintColor: "gray",
  headerShown: false,
});

export const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen
        options={{ title: "home" }}
        name="HomeStack"
        component={HomeNavigator}
      />
      <Tab.Screen name="MyPlan" component={MyPlanNavigator} />
      <Tab.Screen name="Transaction" component={TransactionNavigator} />
    </Tab.Navigator>
  );
};
