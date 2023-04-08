import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

export const Spending = () => {
  return (
    <View style={styles.spendingContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.iconContainer}>
          <AntDesign name="upload" size={15} color="white" />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Feather name="trending-up" size={20} color="green" />
          <Text style={{ color: "green", paddingLeft: 6 }}>+1,8%</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={{ color: "grey" }}>Dons</Text>
          <Text>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>$ 1500</Text>
          </Text>
        </View>
        <Feather name="arrow-up-right" size={24} color="black" />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  spendingContainer: {
    backgroundColor: "white",
    width: 155,
    height: 120,
    marginRight: 10,
    borderRadius: 20,
    padding: 10,
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
