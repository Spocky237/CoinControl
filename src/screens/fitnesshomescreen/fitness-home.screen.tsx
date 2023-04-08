import React from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
  StatusBar,
} from "react-native";
import OverviewCard from "../../components/overview";
import { FitnessHomePlanCard } from "../../components/fitnesshome-plan-card";
import { FitnessHomeTransaction } from "../../components/fitnesshome-transaction";

import mocks from "../../../data/mock.json";
import transaction from "../../../data/transaction.json";

const FitnessHomeScreen = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const status = StatusBar.currentHeight;
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{
        paddingHorizontal: 10,
        backgroundColor: "#ccd1de",
      }}
    >
      <OverviewCard navigation={navigation} />

      {/* My Plan */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 17 }}>Mes Plans</Text>
        <Pressable onPress={() => navigation.navigate("MyPlans")}>
          <Text>Voir Tous</Text>
        </Pressable>
      </View>
      <FlatList
        data={mocks}
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 17,
        }}
      >
        <Text style={{ fontSize: 17 }}>Mes Transactions</Text>
        <Pressable>
          <Text>Voir Tous</Text>
        </Pressable>
      </View>
      <FlatList
        data={transaction}
        renderItem={({ item }) => <FitnessHomeTransaction transaction={item} />}
        showsVerticalScrollIndicator={false}
      />

      <View style={{ margin: 20 }} />
    </ScrollView>
  );
};
export default FitnessHomeScreen;
