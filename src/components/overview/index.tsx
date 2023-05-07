import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";
import { IncomeBox } from "./IncomeBox";
import { SpendingBox } from "./SpendingBox";
import { moderateScale } from "../../utils/Metrics";
import userbudget from "../../../data/user.json";

const OverviewCard = ({ navigation }) => {
  const [userBudget, setUserBudget] = useState(userbudget[0]);

  useEffect(() => {
    setUserBudget({
      ...userBudget,
      budget: userBudget.income - userBudget.spend,
    });
    console.log(userBudget);
  }, [userBudget.income, userBudget.spend]);

  return (
    <View style={{ alignContent: "center", alignItems: "center" }}>
      {/* My Budget*/}
      <View style={styles.container}>
        <Text style={styles.myBudget}>MON BUDGET</Text>
        <Text style={styles.dollar}>
          $ <Text style={styles.myMoney}>{userBudget.budget}</Text>
        </Text>

        {/* Deposit and spending Button*/}
        <View style={styles.depositAndSpending}>
          <Pressable
            onPress={() =>
              navigation.navigate("Deposit", {
                setUserBudget,
                userBudget,
              })
            }
            style={styles.depositButton}
          >
            <AntDesign name="download" size={moderateScale(20)} color="black" />
            <Text style={styles.depositAndSpendingButtonText}>Depot</Text>
          </Pressable>
          <Pressable
            style={styles.spendingButton}
            onPress={() =>
              navigation.navigate("Spending", { setUserBudget, userBudget })
            }
          >
            <AntDesign name="upload" size={moderateScale(20)} color="black" />
            <Text style={styles.depositAndSpendingButtonText}>Dons</Text>
          </Pressable>
        </View>

        {/* Budget overview*/}
        <Text style={styles.budgetOverviewText}>Vue sur le Budget</Text>
        <View style={styles.budgetOverviewContainer}>
          {/*Incomes*/}
          <IncomeBox incomeBudget={userBudget.income} />

          {/*Spending*/}
          <SpendingBox spendingBudget={userBudget.spend} />
        </View>
      </View>
    </View>
  );
};
export default OverviewCard;
