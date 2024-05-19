import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FlashMessage from "react-native-flash-message";

import CartProvider from "./App/context/CartProvider";
import Navigator from "./App/navigation/Navigator";

import colors from "./App/config/colors";
import ProductDeatails from "./App/Screens/ProductDetails";
import FavoritesProvider from "./App/context/FavoritesProvider";

export default function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <StatusBar translucent={false} backgroundColor={colors.light} />
        <Navigator />
        <FlashMessage position={"top"} />
      </FavoritesProvider>
    </CartProvider>
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
