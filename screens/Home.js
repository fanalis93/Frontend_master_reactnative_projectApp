import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ColorPalette", { name: "Custom ColorPalette" });
        }}
      >
        <Text>Got to ColorPalette</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
