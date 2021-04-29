import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  const textColor = {
    //   if the background color is lighter than some threshold, textcolor will be black
    color:
      parseInt(hexCode.replace("#", ""), 16) > 0xffffff / 1.1
        ? "black"
        : "white",
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.boxText, textColor]}>
        {colorName}:{hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 8,
    marginTop: 5,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
  },
  cyanBox: {
    backgroundColor: "#2aa198",
  },
});
export default ColorBox;
