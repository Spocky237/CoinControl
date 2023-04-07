import React from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";
import { styles } from "./plan-card.component.styles";

const PlanCard = ({ plan  }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={{ color: "#a1b1d6" }}>{plan.categorie}</Text>
        <Text style={styles.planTitle}>{plan.plan_name}</Text>
        <Text style={{ color: "#a1b1d6" }}>{plan.create_at}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 5,
          }}
        >
          <View>
            <Text style={{ color: "grey" }}>Budget Total</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              ${plan.argent_prevu}
            </Text>
          </View>
          <View style={{ flexDirection: "row", padding: 5 }}>
            <AntDesign name="download" size={15} color="black" />
            <Text> Depot</Text>
          </View>
        </View>
        <ProgressBar
          progress={plan.argent_depense / plan.argent_prevu}
          style={{ borderRadius: 10, height: 10 }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 5,
          }}
        >
          <Text>${plan.argent_depense}</Text>
          <Text>
            {Math.floor((plan.argent_depense * 100) / plan.argent_prevu)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PlanCard;
