import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

export const DepositScreen = () => {
  const [deposit, setDeposit] = useState<number | any>("");

  const onChange = (text) => {
    if (isNaN(text) == false) {
      return setDeposit(text);
    }
  };
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 50,
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "500" }}>
        {" "}
        Montant du Depot
      </Text>
      <View
        style={{
          justifyContent: "center",
          paddingLeft: 10,
          alignItems: "center",
          margin: 30,
          backgroundColor: "lightgrey",
          width: "100%",
          height: 60,
          borderRadius: 30,
        }}
      >
        <TextInput
          style={{ fontSize: 20, width: "70%" }}
          value={String(deposit)}
          placeholder="entrer le montant"
          onChangeText={(text) => onChange(text)}
          keyboardType="number-pad"
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 60,
            minWidth: "20%",
            maxWidth: "100%",
            borderBottomRightRadius: 50,
            borderTopRightRadius: 50,
            backgroundColor: "grey",
            position: "absolute",
            right: "0%",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              textAlign: "center",
            }}
          >
            $
          </Text>
        </View>
      </View>
    </View>
  );
};
