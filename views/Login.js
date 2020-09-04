import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import PropTypes from "prop-types";
import { AuthContext } from "../contexts/AuthContext";
import AsyncStorage from "@react-native-community/async-storage";
import { postLogIn } from "../hooks/APIhooks";

const Login = ({ navigation }) => {
  // props is needed for navigation
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
  console.log("Login", isLoggedIn);

  const getToken = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    console.log("token", userToken);
    if (userToken === "abc") {
      setIsLoggedIn(true);
      // navigation.navigate("Home");
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  const logIn = async () => {
    try {
      const userData = await postLogIn({
        username: "nuuskakuikkunen",
        password: "salakuikkunen420",
      });
      console.log("user login:", userData);
      setIsLoggedIn(true);
      await AsyncStorage.setItem("userToken", userData.token);
    } catch (e) {
      console.log("login error", e.message);
    }
    // navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Sign in!" onPress={logIn} />
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
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
