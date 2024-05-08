import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import colors from "./App/config/colors";
import HomeScreen from "./App/Screens/HomeScreen";
import LoginScreen from "./App/Screens/LoginScreen";
import SignUpScreen from "./App/Screens/SignUpScreen";

import WelcomeScreen from "./App/Screens/WelcomeScreen";
import ProductDeatails from "./App/Screens/ProductDetails";
import Cart from "./App/Screens/Cart";
import CategoryScreen from "./App/Screens/CategoryScreen";
import SearchScreen from "./App/Screens/SearchScreen";
import ProfileScreen from "./App/Screens/ProfileScreen";
import CheckOutScreen from "./App/Screens/CheckoutScreen";

export default function App() {
  return (
    <>
      {/* <WelcomeScreen /> */}
      {/* <LoginScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <ProductDeatails /> */}
      {/* <Cart /> */}
      <StatusBar translucent={false} backgroundColor={colors.light} />
      {/* <HomeScreen /> */}
      {/* <CategoryScreen /> */}
      {/* <SearchScreen /> */}
      <ProfileScreen />
      {/* <CheckOutScreen /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
