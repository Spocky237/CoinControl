import React from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";
import { styles } from "./styles";
import { moderateScale } from "../../utils/Metrics";

const PlanCard = ({ plan }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={{ color: "#a1b1d6" }}>{plan.categorie}</Text>
        <Text style={styles.planTitle}>{plan.plan_name}</Text>
        <Text style={{ color: "#a1b1d6" }}>{plan.create_at}</Text>
      </View>

      {/* footer */}
      <View style={styles.footerContainer}>
        <View style={styles.row}>
          <View>
            <Text style={{ color: "grey" }}>Budget Total</Text>
            <Text style={{ fontSize: moderateScale(18), fontWeight: "bold" }}>
              ${plan.argent_prevu}
            </Text>
          </View>
          <View style={{ flexDirection: "row", padding: moderateScale(5) }}>
            <AntDesign name="download" size={moderateScale(15)} color="black" />
            <Text> Depot</Text>
          </View>
        </View>
        <ProgressBar
          progress={plan.argent_depense / plan.argent_prevu}
          style={styles.progressBar}
        />
        <View style={styles.row}>
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
