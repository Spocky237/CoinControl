import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";

import {
  moderateScale,
  horizontalScale,
  verticalScale,
} from "../../utils/Metrics";

export const FitnessHomePlanCard = ({ plan }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.categorie}>{plan.categorie}</Text>
      <Text style={styles.planName}>{plan.plan_name}</Text>
      <View style={styles.bottomContainer}>
        <Text>$ {plan.argent_depense}</Text>
        <Text style={{ color: "grey" }}>$ {plan.argent_prevu}</Text>
      </View>
      <ProgressBar
        progress={plan.argent_depense / plan.argent_prevu}
        style={styles.progressBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(150),
    width: horizontalScale(260),
    backgroundColor: "white",
    marginHorizontal: horizontalScale(7),
    borderRadius: moderateScale(20),
    paddingHorizontal: horizontalScale(10),
  },
  categorie: { color: "grey", fontSize: moderateScale(13) },
  planName: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    paddingVertical: verticalScale(6),
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: verticalScale(13),
    paddingBottom: verticalScale(3),
  },
  progressBar: { borderRadius: moderateScale(10), height: verticalScale(13) },
});
