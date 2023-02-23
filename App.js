import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IntroScreen from "./Screens/IntroScreen";
import MainScreen from "./Screens/MainScreen";

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, [App]);
  return (
    <View style={styles.container}>
      <Text>Hi there,</Text>
      <StatusBar style="auto" />
      {loading ? <MainScreen /> : <IntroScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
