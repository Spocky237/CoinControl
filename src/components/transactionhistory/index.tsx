import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";
import { moderateScale } from "../../utils/Metrics";

export const TransactionHistory = ({ transaction }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AntDesign
          style={styles.antDesign}
          name={transaction.type === "deposit" ? "download" : "upload"}
          size={moderateScale(22)}
          color={transaction.type === "deposit" ? "green" : "red"}
        />
        <View>
          <Text style={styles.date}>{transaction.date}</Text>
          <Text style={styles.text}>{transaction.reason.toUpperCase()}</Text>
        </View>
      </View>
      <Text
        style={{
          color: transaction.type === "deposit" ? "green" : "red",
          fontWeight: "700",
          fontSize: moderateScale(22),
        }}
      >
        {transaction.type === "deposit"
          ? `$${transaction.prix}`
          : ` -$${transaction.prix}`}
      </Text>
    </View>
  );
};
