import React, { useState, useRef } from "react";
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

const MyPlanUpsertScreen = ({ navigation }) => {
  const [planName, setPlanName] = useState<string | null>();
  const [budgetPlan, setBudgetPlan] = useState<string | null>();
  const [date, setDate] = useState(new Date(1598051730000));
  const [selectedCategory, setSelectedCategory] = useState();

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
          placeholder="Enter le nom du plan"
          defaultValue={planName}
          onChangeText={setPlanName}
        />
        <Text style={styles.text}>Entrer le solde</Text>
        <TextInput
          style={styles.amount}
          placeholder="0.00"
          textAlign="right"
          value={budgetPlan}
          onChangeText={setBudgetPlan}
        />
      </View>

      <View style={styles.detail}>
        <Text style={styles.planDetail}>Plan details</Text>
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

        <Text style={styles.subtitle}>Date limite</Text>
        <Pressable onPress={() => setShow(true)} style={styles.datePicker}>
          <EvilIcons name="calendar" size={moderateScale(24)} color="black" />
          <Text
            style={{
              fontWeight: "100",
              paddingHorizontal: horizontalScale(10),
              fontSize: moderateScale(20),
            }}
          >
            {dayjs(date).format("DD/MM/YYYY")}
          </Text>
        </Pressable>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            dateFormat="day month year"
            onChange={onChange}
          />
        )}
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.textButton}>Sauvegarder le plan</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MyPlanUpsertScreen;

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
    height: horizontalScale(50),
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
