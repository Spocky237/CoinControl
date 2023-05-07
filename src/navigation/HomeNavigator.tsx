import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import { DepositScreen } from "../screens/HomeScreen/IncomeScreen";
import { SpendingScreen } from "../screens/HomeScreen/SpendScreen";
const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Deposit" component={DepositScreen} />
      <Stack.Screen name="Spending" component={SpendingScreen} />
    </Stack.Navigator>
  );
};
export default HomeNavigator;
