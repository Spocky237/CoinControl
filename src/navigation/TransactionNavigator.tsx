import React from "react";
import { View, Text, Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import TransactionScreen from "../screens/TransactionScreen";
import TransactionDetailScreen from "../screens/TransactionScreen/TransactionDetailScreen";
import TransactionUpsertScreen from "../screens/TransactionScreen/TransactionUpsertScreen";

const Stack = createNativeStackNavigator();
const TransactionNavigator = () => {
  const Navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerRight,
        }}
        name="Transactions"
        component={TransactionScreen}
      />
      <Stack.Screen
        options={{
          title: "Detail",
        }}
        name="TransactionDetail"
        component={TransactionDetailScreen}
      />
      <Stack.Screen
        options={{
          title: "Nouvelle transaction",
        }}
        name="TransactionAdd"
        component={TransactionUpsertScreen}
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
      onPress={() => navigation.navigate("TransactionAdd")}
    >
      <Ionicons name="ios-create-outline" size={24} color="black" />
      <Text style={{ padding: 5 }}>Creer</Text>
    </Pressable>
  );
};

export default TransactionNavigator;
