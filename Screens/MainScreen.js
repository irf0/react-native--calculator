import React, { useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./MainStyles";

const MainScreen = () => {
  const [value, setValue] = useState(0);
  const ref = useRef();

  const handlePress = (val) => {
    if (val === "=") {
      try {
        const result = eval(value);
        setValue(result.toString());
      } catch (error) {
        setValue("Error");
      }
    } else if (val === "AC") {
      setValue("0");
    } else if (val === "DEL") {
      setValue(value.slice(0, -1));
    } else if (val === "+/-") {
      setValue(value * -1);
    } else {
      setValue(value === "0" ? val : value + val);
    }
  };

  return (
    <View style={styles.main_screen}>
      <ScrollView style={styles.main_screen__display}>
        <Text style={styles.main_screen__display_text}>
          {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
      </ScrollView>
      {/*  */}
      <View style={styles.main_screen_keypad}>
        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={() => handlePress("AC")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg1_button}>AC</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("+/-")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg1_button}>+/-</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("%")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg1_button}>%</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("DEL")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg1_button}>DEL</Text>
            </View>
          </Pressable>
        </View>
        {/*  */}
        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={() => handlePress("7")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>7</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("8")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>8</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("9")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>9</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("/")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg1_button}>/</Text>
            </View>
          </Pressable>
        </View>
        {/*  */}
        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={() => handlePress("4")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>4</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("5")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>5</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("6")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>6</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("*")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg1_button}>X</Text>
            </View>
          </Pressable>
        </View>
        {/*  */}
        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={() => handlePress("1")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>1</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("2")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>2</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("3")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>3</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("-")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg1_button}>-</Text>
            </View>
          </Pressable>
        </View>
        {/*  */}
        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={() => handlePress("0")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>0</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress(".")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>.</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("=")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg1_button}>=</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("+")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg1_button}>+</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
