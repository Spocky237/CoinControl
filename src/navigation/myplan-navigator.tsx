import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyPlanScreen from "../screens/myplanscreen/my-plan.screen";
import MyPlanDetailScreen from "../screens/myplanscreen/my-plan-detail.screen";

const Stack = createNativeStackNavigator();
const MyPlanNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mes Plans" component={MyPlanScreen} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Detail"
        component={MyPlanDetailScreen}
      />
    </Stack.Navigator>
  );
};
export default MyPlanNavigator;