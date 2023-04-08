import React from "react";
import {
  FlatList,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";

import { TransactionHistory } from "../../components/transactionhistory";

interface detail {
  argent_depense: number;
  argent_prevu: number;
  categorie: string;
  create_at: string;
  id: number;
  plan_name: string;
  expired_at: string;
  transaction: [
    {
      id: number;
      reason: string;
      type: string;
      prix: number;
      date: string;
    }
  ];
}

const MyPlanDetailScreen = ({ route, navigation }) => {
  const planDetail: detail = route.params;
  const { width } = useWindowDimensions();
  return (
    <View>
      <View
        style={{
          height: 320,
          width,
          backgroundColor: "#3560e6",
          borderBottomStartRadius: 40,
          borderBottomEndRadius: 10,
          paddingTop: 30,
        }}
      >
        {/* Blue Header */}
        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ paddingLeft: 20, paddingTop: 20 }}
          name="arrow-back"
          size={29}
          color="white"
        />
        <View
          style={{
            alignSelf: "center",
            paddingVertical: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            {planDetail.plan_name}
          </Text>
          <Text style={{ color: "#a1b1d6" }}>{planDetail.categorie}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 10,
          }}
        >
          <Text style={{ color: "#a1b1d6" }}>
            Crée le {planDetail.create_at}
          </Text>
          <Text style={{ color: "#a1b1d6" }}>
            expire le {planDetail.expired_at}
          </Text>
        </View>

        {/* white Header */}
        <View
          style={{
            marginTop: 20,
            backgroundColor: "white",
            width,
            height: 100,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 40,
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 5,
            }}
          >
            <View>
              <Text style={{ color: "grey" }}>Budget Total</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                ${planDetail.argent_prevu}
              </Text>
            </View>
            <View style={{ flexDirection: "row", padding: 5 }}>
              <AntDesign name="download" size={15} color="black" />
              <Text> Depot</Text>
            </View>
          </View>
          <ProgressBar
            progress={planDetail.argent_depense / planDetail.argent_prevu}
            style={{ borderRadius: 10, height: 10 }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 5,
            }}
          >
            <Text>${planDetail.argent_depense}</Text>
            <Text>
              {Math.floor(
                (planDetail.argent_depense * 100) / planDetail.argent_prevu
              )}
              %
            </Text>
          </View>
        </View>
      </View>

      {/* history */}
      <View
        style={{
          backgroundColor: "white",
          width: width - 20,
          marginTop: 20,
          marginHorizontal: 10,
          padding: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text style={{ paddingBottom: 10, fontSize: 20, fontWeight: "600" }}>
          Historique
        </Text>
        <FlatList
          data={planDetail.transaction}
          renderItem={({ item }) => {
            return <TransactionHistory transaction={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default MyPlanDetailScreen;
