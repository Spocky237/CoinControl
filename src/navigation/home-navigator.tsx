import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FitnessHomeScreen from "../screens/fitnesshomescreen/fitness-home.screen";
import { DepositScreen } from "../screens/fitnesshomescreen/depot.screen";
import { SpendingScreen } from "../screens/fitnesshomescreen/spend.screen";
const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={FitnessHomeScreen} />
      <Stack.Screen name="Deposit" component={DepositScreen} />
      <Stack.Screen name="Spending" component={SpendingScreen} />
    </Stack.Navigator>
  );
};
export default HomeNavigator;
