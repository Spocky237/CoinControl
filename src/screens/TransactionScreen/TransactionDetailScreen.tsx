import React from "react";
import { View, Text, Image } from "react-native";

import transaction from "../../../data/transaction.json";

const TransactionDetailScreen = () => {
  const iconCategorie = require("../../../assets/Icon/transport.png");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "lightgrey",
        justifyContent: "center",
        padding: 50,
      }}
    >
      <Image source={iconCategorie} />
      <View></View>
      <View></View>
      <Text></Text>
    </View>
  );
};

export default TransactionDetailScreen;
