import React from "react";
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import colors from "../config/colors";
import { AppButton, AppButtonBg } from "../components/Button";

const screenHeight = Dimensions.get("window").height;
const screenWdith = Dimensions.get("window").width;

const WelcomeSceen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bag_model.jpg")}
        style={styles.img}
      >
        <View style={{ width: "100%" }}>
          <Text style={styles.text}>Start Your Shopping Journey Now</Text>
          <AppButton text={"Login"} />
          <AppButtonBg text={"Sign Up"} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: screenHeight,
    padding: 20,
    width: screenWdith,
  },
  text: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "600",
    marginBottom: 60,
    textAlign: "center",
  },
});

export default WelcomeSceen;
