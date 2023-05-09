import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { EvilIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../utils/Metrics";

const dayjs = require("dayjs");

const TransactionUpsertScreen = ({ navigation }) => {
  const [Description, setDescription] = useState<string | null>();
  const [budget, setBudget] = useState<string | null>();
  const [date, setDate] = useState(new Date(1598051730000));
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedPlan, setSelectedPlan] = useState();

  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.root}>
      <View style={styles.info}>
        <TextInput
          style={styles.title}
          placeholder="Description"
          defaultValue={Description}
          onChangeText={setDescription}
          numberOfLines={2}
          maxLength={150}
        />
        <Text style={styles.text}>Entrer le solde</Text>
        <TextInput
          style={styles.amount}
          placeholder="0.00"
          textAlign="right"
          value={budget}
          onChangeText={setBudget}
        />
      </View>

      <View style={styles.detail}>
        <Text style={styles.planDetail}>Transaction details</Text>
        <Text style={styles.subtitle}>Categorie</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCategory(itemValue)
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="Java" value="java" />
          </Picker>
        </View>

        <Text style={styles.subtitle}>Plan lié</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedPlan}
            onValueChange={(itemValue, itemIndex) => setSelectedPlan(itemValue)}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="Aucun plan" value="0" />
          </Picker>
        </View>

        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.textButton}>Ajouter la transaction</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TransactionUpsertScreen;

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "white" },
  info: {
    height: horizontalScale(200),
    paddingTop: moderateScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  title: {
    width: "100%",
    fontWeight: "500",
    fontSize: moderateScale(20),
    minHeight: horizontalScale(50),
    borderBottomWidth: moderateScale(3),
    borderColor: "#2309",
  },
  amount: {
    padding: moderateScale(15),
    width: "100%",
    fontWeight: "500",
    fontSize: moderateScale(20),
    height: horizontalScale(50),
    backgroundColor: "lightgrey",
    borderRadius: moderateScale(25),
  },
  text: {
    fontWeight: "bold",
    paddingTop: horizontalScale(25),
    fontSize: moderateScale(16),
    paddingBottom: horizontalScale(10),
  },
  detail: {
    flex: 1,
    padding: moderateScale(20),
    backgroundColor: "lightgrey",
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  picker: {
    width: "100%",
    backgroundColor: "white",
    alignSelf: "center",
    height: horizontalScale(50),
    borderRadius: moderateScale(20),
    justifyContent: "center",
    padding: moderateScale(10),
    marginBottom: horizontalScale(15),
  },
  datePicker: {
    width: "100%",
    backgroundColor: "white",
    alignSelf: "center",
    height: horizontalScale(50),
    borderRadius: moderateScale(20),
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: moderateScale(10),
  },
  planDetail: { fontSize: 20, fontWeight: "bold", paddingBottom: 17 },
  subtitle: { fontSize: 16, paddingBottom: 10, fontWeight: "600" },
  button: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    bottom: horizontalScale(20),
    height: horizontalScale(50),
    borderRadius: moderateScale(20),
    backgroundColor: "darkgreen",
    justifyContent: "center",
  },
  textButton: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: "white",
  },
});
