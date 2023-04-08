import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

export const Income = () => {
  return (
    <View style={styles.depositContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.iconContainer}>
          <AntDesign name="download" size={15} color="white" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Feather name="trending-up" size={20} color="green" />
          <Text style={{ color: "green", paddingLeft: 6 }}>+2,8%</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={{ color: "grey" }}>Revenus</Text>
          <Text>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>$ 3000</Text>
          </Text>
        </View>
        <Feather name="arrow-up-right" size={24} color="black" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  depositContainer: {
    backgroundColor: "white",
    width: 155,
    height: 120,
    marginLeft: 10,
    borderRadius: 20,
    padding: 10,
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: "black",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
