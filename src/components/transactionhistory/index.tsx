import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const TransactionHistory = ({ transaction }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingTop: 15,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign
          style={{ paddingRight: 20 }}
          name={transaction.type === "deposit" ? "download" : "upload"}
          size={22}
          color={transaction.type === "deposit" ? "green" : "red"}
        />
        <View>
          <Text style={{ color: "grey" }}>{transaction.date}</Text>
          <Text style={{ fontWeight: "bold" }}>
            {transaction.reason.toUpperCase()}
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: transaction.type === "deposit" ? "green" : "red",
          fontWeight: "700",
          fontSize: 22,
        }}
      >
        {transaction.type === "deposit"
          ? `$${transaction.prix}`
          : ` -$${transaction.prix}`}
      </Text>
    </View>
  );
};
