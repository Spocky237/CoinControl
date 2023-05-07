import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";

import {
  moderateScale,
  horizontalScale,
  verticalScale,
} from "../../utils/Metrics";

export const DepositScreen = ({ route, navigation }) => {
  const [deposit, setDeposit] = useState<number | any>("");
  const { setUserBudget, userBudget } = route.params;

  const onChange = (text) => {
    if (isNaN(text) == false) {
      return setDeposit(text);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Montant du Depot</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.textInput}
          value={String(deposit)}
          placeholder="Entrer le montant"
          onChangeText={(text) => onChange(text)}
          keyboardType="number-pad"
          onFocus={() => true}
        />
        <View style={styles.dollarContainer}>
          <Text style={styles.text}>$</Text>
        </View>
      </View>
      <Button
        title="Depot"
        onPress={() => {
          setUserBudget({
            ...userBudget,
            income: userBudget.income + Math.floor(deposit),
          });
          return navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: verticalScale(50),
    paddingHorizontal: horizontalScale(20),
  },
  title: {
    textAlign: "center",
    fontSize: moderateScale(20),
    fontWeight: "500",
  },
  row: {
    justifyContent: "center",
    paddingLeft: horizontalScale(10),
    alignItems: "center",
    marginVertical: verticalScale(37),
    marginHorizontal: horizontalScale(37),
    backgroundColor: "lightgrey",
    width: "100%",
    height: verticalScale(80),
    borderRadius: moderateScale(30),
  },
  textInput: { fontSize: 20, width: "70%" },
  dollarContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: verticalScale(80),
    minWidth: "20%",
    maxWidth: "100%",
    borderBottomRightRadius: moderateScale(50),
    borderTopRightRadius: moderateScale(50),
    backgroundColor: "grey",
    position: "absolute",
    right: "0%",
  },
  text: {
    fontSize: moderateScale(17),
    textAlign: "center",
  },
});
