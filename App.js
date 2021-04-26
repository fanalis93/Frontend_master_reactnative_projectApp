import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={[styles.pink, styles.container]}>
        <Text style={styles.text}>
          Here are some boxes of different colors!
        </Text>
        <View style={[styles.cyanBox, styles.box]}>
          <Text style={styles.boxText}>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.blueBox, styles.box]}>
          <Text style={styles.boxText}>Blue: #268bd2</Text>
        </View>
        <View style={[styles.magentaBox, styles.box]}>
          <Text style={styles.boxText}>Cyan: #d33682</Text>
        </View>
        <View style={[styles.orangeBox, styles.box]}>
          <Text style={styles.boxText}>Orange: #cb4b16</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 35,
    //backgroundColor: "yellow",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: "pink",
    borderWidth: 5,
    //alignItems: "center",
    //justifyContent: "center",
    flex: 1,
  },
  pink: {
    //backgroundColor: "pink",
  },

  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  safeArea: {
    flex: 2,
  },
  box: {
    padding: 8,
    marginTop: 5,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cyanBox: {
    backgroundColor: "#2aa198",
  },
  blueBox: {
    backgroundColor: "#268bd2",
  },
  magentaBox: {
    backgroundColor: "#d33682",
  },
  orangeBox: {
    backgroundColor: "#cb4b16",
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default App;
