import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ShowScreen = ({navigation}) => {
  return (
    <View>

  <Text>Show Screen - {navigation.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
