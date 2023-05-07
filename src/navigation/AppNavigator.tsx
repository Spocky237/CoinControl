import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeNavigator from "./HomeNavigator";
import MyPlanNavigator from "./MyPlanNavigator";
const Tab = createMaterialBottomTabNavigator();
export const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={HomeNavigator} />
      <Tab.Screen name="Plans" component={MyPlanNavigator} />
      <Tab.Screen name="Transactions" component={() => null} />
      <Tab.Screen name="Synthèse" component={() => null} />
    </Tab.Navigator>
  );
};
