import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, Text, Button } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-community/async-storage";

const Profile = ({ navigation }) => {
  const { setIsLoggedIn, user } = useContext(AuthContext);
  console.log("logged in user data:", user);
  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Username: {user.username}</Text>
      <Text>User ID: {user.user_id}</Text>
      <Text>Full name: {user.full_name}</Text>
      <Text>Email: {user.email}</Text>
      <Button title={"Logout"} onPress={logout} />
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

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
