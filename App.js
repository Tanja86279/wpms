import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView
} from "react-native";
import { List } from "./components/List";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <List></List>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
