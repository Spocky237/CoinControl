import React from "react";
import { View, Text } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

import { styles } from "./overview-card.component.styles";

const OverviewCard = () => {
  return (
    <View style={{ alignContent: "center", alignItems: "center" }}>
      {/* My Budget*/}
      <View style={styles.container}>
        <Text style={styles.myBudget}>MON BUDGET</Text>
        <Text style={styles.dollar}>
          $ <Text style={styles.myMoney}>1500</Text>
        </Text>

        {/* Deposit and spending*/}
        <View style={styles.depositAndSpanding}>
          <View style={styles.depositButton}>
            <AntDesign name="download" size={20} color="black" />
            <Text style={styles.depositAndSpendingButtonText}>Depot</Text>
          </View>
          <View style={styles.spendingButton}>
            <AntDesign name="upload" size={20} color="black" />
            <Text style={styles.depositAndSpendingButtonText}>Dons</Text>
          </View>
        </View>

        {/* Budget overview*/}
        <Text style={styles.budgetOverviewText}>Vue sur le Budget</Text>
        <View style={styles.budgetOverviewContainer}>
          {/*Revenu*/}
          <View style={styles.depositOverviewContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.iconContainer}>
                <AntDesign name="download" size={15} color="white" />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Feather name="trending-up" size={20} color="green" />
                <Text style={{ color: "green", paddingLeft: 6 }}>+2,8%</Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ color: "grey" }}>Revenus</Text>
                <Text>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    $ 3000
                  </Text>
                </Text>
              </View>
              <Feather name="arrow-up-right" size={24} color="black" />
            </View>
          </View>

          {/*Dons*/}
          <View style={styles.spendingContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.iconContainer}>
                <AntDesign name="upload" size={15} color="white" />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Feather name="trending-up" size={20} color="green" />
                <Text style={{ color: "green", paddingLeft: 6 }}>+1,8%</Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ color: "grey" }}>Dons</Text>
                <Text>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    $ 1500
                  </Text>
                </Text>
              </View>
              <Feather name="arrow-up-right" size={24} color="black" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default OverviewCard;
