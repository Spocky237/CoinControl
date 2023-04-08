import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const FitnessHomeTransaction = ({ transaction }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 30,
        width: width - 40,
        marginTop: 10,
        marginHorizontal: 10,
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        alignItems: "center",
      }}
    >
      <AntDesign
        name={transaction.type === "deposit" ? "download" : "upload"}
        size={23}
        color="grey"
      />
      <Text
        style={{
          fontWeight: "400",
          color: transaction.type === "deposit" ? "green" : "red",
        }}
      >
        $ {transaction.prix}
      </Text>
    </View>
  );
};
