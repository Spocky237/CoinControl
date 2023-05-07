import React, { useState } from "react";
import { StyleSheet, View, FlatList, Pressable } from "react-native";

import PlanCard from "../../components/PlanCard";

import mock from "../../../data/mock.json";

const MyPlanScreen = ({ navigation }) => {
  const [plan, setplan] = useState(mock);
  return (
    <View style={{ paddingTop: 10, backgroundColor: "#ccd1de" }}>
      <FlatList
        data={plan}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate("Detail", item)}>
            <PlanCard plan={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create;
export default MyPlanScreen;
