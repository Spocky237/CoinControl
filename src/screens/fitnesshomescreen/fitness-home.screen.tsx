import React from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

import OverviewCard from "../../components/overview-card/overview-card.component";

import mocks from "../../../../data/mock.json";
import transaction from "../../../../data/transaction.json";

const FitnessHomeScreen = ({ navigation }) => {
  const { width } = useWindowDimensions();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{
        padding: 10,
        backgroundColor: "#ccd1de",
      }}
    >
      {/* Overview Card */}
      <OverviewCard />

      {/* MY PLAN */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 17 }}>Mes Plans</Text>
        <Text>Voir Tous</Text>
      </View>
      <FlatList
        data={mocks}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("Detail", item);
            }}
          >
            <View
              style={{
                height: 120,
                width: 240,
                backgroundColor: "white",
                marginHorizontal: 7,
                borderRadius: 20,
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ color: "grey", fontSize: 13 }}>
                {item.categorie}
              </Text>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", paddingVertical: 5 }}
              >
                {item.plan_name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: 10,
                  paddingBottom: 3,
                }}
              >
                <Text>$ {item.argent_depense}</Text>
                <Text style={{ color: "grey" }}>$ {item.argent_prevu}</Text>
              </View>
              <ProgressBar
                progress={item.argent_depense / item.argent_prevu}
                style={{ borderRadius: 10, height: 10 }}
              />
            </View>
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
        <Text>Voir Tous</Text>
      </View>
      <View>
        <FlatList
          data={transaction}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 30,
                width: width - 40,
                marginTop: 10,
                marginHorizontal: 10,
                height: 70,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
                alignItems: "center",
              }}
            >
              <AntDesign
                name={item.type === "deposit" ? "download" : "upload"}
                size={23}
                color="grey"
              />
              <Text
                style={{
                  fontWeight: "400",
                  color: item.type === "deposit" ? "green" : "red",
                }}
              >
                $ {item.prix}
              </Text>
            </View>
          )}
        />
      </View>
      <View style={{ margin: 20 }} />
    </ScrollView>
  );
};
export default FitnessHomeScreen;
