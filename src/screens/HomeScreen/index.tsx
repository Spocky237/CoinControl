import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
  StatusBar,
  StyleSheet,
} from "react-native";

import {
  moderateScale,
  horizontalScale,
  verticalScale,
} from "../../utils/Metrics";

import OverviewCard from "../../components/Overview";
import { FitnessHomePlanCard } from "../../components/HomePlanCard";
import { FitnessHomeTransaction } from "../../components/HomeTransactionCard";

import mocks from "../../../data/mock.json";
import transaction from "../../../data/transaction.json";

const HomeScreen = ({ navigation }) => {
  const [budgetGestion, setBudgetGestion] = useState(mocks);

  const { width } = useWindowDimensions();
  const status = StatusBar.currentHeight;
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      {/*  Overview */}
      <OverviewCard navigation={navigation} />

      {/* My Plan */}
      <View style={styles.planList}>
        <Text style={styles.listTitle}>Mes Plans</Text>
        <Pressable onPress={() => navigation.navigate("MyPlans")}>
          <Text> Afficher Tout</Text>
        </Pressable>
      </View>
      <FlatList
        data={budgetGestion}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("Detail", item);
            }}
          >
            <FitnessHomePlanCard plan={item} />
          </Pressable>
        )}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/*MY TRANSACTIONS*/}
      <View style={styles.transactionList}>
        <Text style={styles.listTitle}>Mes Transactions</Text>
        <Pressable>
          <Text>Afficher Tout</Text>
        </Pressable>
      </View>
      {transaction &&
        transaction
          .slice(0, 3)
          .map((item) => <FitnessHomeTransaction transaction={item} />)}

      <View style={{ margin: moderateScale(20) }} />
    </ScrollView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(5),
    backgroundColor: "#ccd1de",
  },
  planList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(28),
    marginBottom: verticalScale(10),
  },
  listTitle: { fontSize: moderateScale(17) },
  transactionList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(17),
  },
});
