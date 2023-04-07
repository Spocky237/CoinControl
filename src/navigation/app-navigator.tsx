import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import FitnessHomeScreen from "../screens/fitnesshomescreen/fitness-home.screen";
import MyPlanNavigator from "./myplan-navigator";
const Tab = createMaterialBottomTabNavigator();
export const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={FitnessHomeScreen} />
      <Tab.Screen
       
        name="MyPlans"
        component={MyPlanNavigator}
      />
    </Tab.Navigator>
  );
};
