import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useContext } from "react";

import AppHeader from "../components/AppHeader";
import Box from "../components/Box";
import FavoritesContext from "../context/FavoritesContext";

const FavoriteScreen = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader text={"Wishlist"} />
        <View style={styles.items}>
          {favorites.length !== 0 ? (
            favorites.map((product, index) => (
              <Box product={product} key={index} />
            ))
          ) : (
            <View style={styles.emptyView}>
              <Text style={{ fontSize: 16 }}>Your Wishlist is empty</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 10,
  },
  emptyView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  items: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    paddingBottom: 10,
  },
});

export default FavoriteScreen;
