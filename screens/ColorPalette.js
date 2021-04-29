import React from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import ColorBox from "../components/ColorBox";
import { NavigationContainer } from "@react-navigation/native";

const COLORS = [
  { colorName: "Base03", hexCode: "#002b36" },
  { colorName: "Base02", hexCode: "#073642" },
  { colorName: "Base01", hexCode: "#586e75" },
  { colorName: "Base00", hexCode: "#657b83" },
  { colorName: "Base0", hexCode: "#839496" },
  { colorName: "Base1", hexCode: "#93a1a1" },
  { colorName: "Base2", hexCode: "#eee8d5" },
  { colorName: "Base3", hexCode: "#fdf6e3" },
  { colorName: "Yellow", hexCode: "#b58900" },
  { colorName: "Orange", hexCode: "#cb4b16" },
  { colorName: "Red", hexCode: "#dc322f" },
  { colorName: "Magenta", hexCode: "#d33682" },
  { colorName: "Violet", hexCode: "#6c71c4" },
  { colorName: "Blue", hexCode: "#268bd2" },
  { colorName: "Cyan", hexCode: "#2aa198" },
  { colorName: "Green", hexCode: "#859900" },
];

const ColorPalette = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.pink, styles.container]}>
        <Text style={styles.text}>
          Here are some boxes of different colors! iin traditional way.
        </Text>
        <View style={[styles.cyanBox, styles.box]}>
          <Text style={styles.boxText}>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.blueBox, styles.box]}>
          <Text style={styles.boxText}>Blue: #268bd2</Text>
        </View>
        {/* ColorBox is a reusable component from component folder */}
        <ColorBox colorName="Magenta" hexCode="#d33682" />
        <ColorBox colorName="Orange" hexCode="#cb4b16" />
      </View>
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        style={styles.container}
        ListHeaderComponent={
          <Text style={styles.text}>
            Solarized colors using FlatList component
          </Text>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //marginTop: 35,
    //backgroundColor: "yellow",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: "pink",
    borderWidth: 1,
    //alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "white",
    flex: 0,
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

export default ColorPalette;
