import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import logo from "../assets/logo.png";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.innerImg} />
        <Text style={styles.logoTxt}>Calculator</Text>
      </View>
      <Text style={styles.tagTxt}>Made with ❤ by m_Irfan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  innerImg: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  logoTxt: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  tagTxt: {
    fontSize: 10,
    position: "absolute",
    bottom: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default IntroScreen;
