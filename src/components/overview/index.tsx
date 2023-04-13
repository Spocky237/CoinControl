import React from "react";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";
import { IncomeBox } from "./IncomeBox";
import { SpendingBox } from "./SpendingBox";
import { moderateScale } from "../../utils/Metrics";

const OverviewCard = ({ navigation }) => {
  return (
    <View style={{ alignContent: "center", alignItems: "center" }}>
      {/* My Budget*/}
      <View style={styles.container}>
        <Text style={styles.myBudget}>MON BUDGET</Text>
        <Text style={styles.dollar}>
          $ <Text style={styles.myMoney}>1500</Text>
        </Text>

        {/* Deposit and spending Button*/}
        <View style={styles.depositAndSpending}>
          <Pressable
            onPress={() => navigation.navigate("Deposit")}
            style={styles.depositButton}
          >
            <AntDesign name="download" size={moderateScale(20)} color="black" />
            <Text style={styles.depositAndSpendingButtonText}>Depot</Text>
          </Pressable>
          <Pressable
            style={styles.spendingButton}
            onPress={() => navigation.navigate("Spending")}
          >
            <AntDesign name="upload" size={moderateScale(20)} color="black" />
            <Text style={styles.depositAndSpendingButtonText}>Dons</Text>
          </Pressable>
        </View>

        {/* Budget overview*/}
        <Text style={styles.budgetOverviewText}>Vue sur le Budget</Text>
        <View style={styles.budgetOverviewContainer}>
          {/*Incomes*/}
          <IncomeBox />

          {/*Spending*/}
          <SpendingBox />
        </View>
      </View>
    </View>
  );
};
export default OverviewCard;
