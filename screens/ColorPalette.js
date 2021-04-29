import React from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import ColorBox from "../components/ColorBox";
import { NavigationContainer } from "@react-navigation/native";
import Colors from "../components/Colors";
import { color } from "react-native-reanimated";

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.pink, styles.container]}>
        <Text style={styles.text}>
          Here are some boxes of different colors! in traditional way.
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
        data={colors}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        style={styles.container}
        ListHeaderComponent={
          <Text style={[styles.text, { color: Colors.blue }]}>
            {paletteName}
            <Text style={styles.text}> colors using FlatList component</Text>
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
    color: Colors.black,
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
