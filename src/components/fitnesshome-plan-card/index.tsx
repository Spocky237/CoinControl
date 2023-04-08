import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";

export const FitnessHomePlanCard = ({ plan }) => {
  return (
    <View
      style={{
        height: 120,
        width: 240,
        backgroundColor: "white",
        marginHorizontal: 7,
        borderRadius: 20,
        paddingHorizontal: 10,
      }}
    >
      <Text style={{ color: "grey", fontSize: 13 }}>{plan.categorie}</Text>
      <Text style={{ fontSize: 18, fontWeight: "bold", paddingVertical: 5 }}>
        {plan.plan_name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 10,
          paddingBottom: 3,
        }}
      >
        <Text>$ {plan.argent_depense}</Text>
        <Text style={{ color: "grey" }}>$ {plan.argent_prevu}</Text>
      </View>
      <ProgressBar
        progress={plan.argent_depense / plan.argent_prevu}
        style={{ borderRadius: 10, height: 10 }}
      />
    </View>
  );
};
