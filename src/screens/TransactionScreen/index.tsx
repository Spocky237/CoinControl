import React from "react";
import { View, FlatList, Pressable } from "react-native";

import { TransactionCard } from "../../components/TransactionCard";

import transaction from "../../../data/transaction.json";

const TransactionScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "lightgrey",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <FlatList
        data={transaction}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate("TransactionDetail")}>
            <TransactionCard transaction={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default TransactionScreen;
