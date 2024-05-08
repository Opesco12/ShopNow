import { Image, Text, StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";

import colors from "../config/colors";
import { AppButtonBg } from "../components/Button";
import AppCartItem from "../components/AppCartItem";
import AppBackButton from "../components/AppBackButton";
import ListItemSeparator from "../components/ListItemSeparator";

import { products } from "../../api";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      imgUrl: require("../assets/iphone_13_1.png"),
      name: "Iphone 13 pro max",
      price: 900.0,
    },
    {
      id: 2,
      imgUrl: require("../assets/iphone_13_1.png"),
      name: "Iphone 13 pro max",
      price: 900.0,
    },
    {
      id: 3,
      imgUrl: require("../assets/iphone_13_1.png"),
      name: "Iphone 13 pro max",
      price: 900.0,
    },

    {
      id: 4,
      imgUrl: require("../assets/iphone_13_1.png"),
      name: "Iphone 13 pro max",
      price: 900.0,
    },

    {
      id: 5,
      imgUrl: require("../assets/iphone_13_1.png"),
      name: "Iphone 13 pro max",
      price: 900.0,
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((Item) => Item.id !== id));
  };

  return (
    <View style={styles.container}>
      <AppBackButton
        compStyle={{
          backgroundColor: colors.white,
          borderWidth: 2,
          borderColor: colors.light,
        }}
      />
      <Text style={styles.header}>My Cart</Text>

      <View style={styles.content}>
        <FlatList
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          data={products}
          renderItem={({ item }) => (
            <AppCartItem
              id={item.id}
              imgUrl={item.thumbnail}
              price={item.price}
              name={item.title}
              onPress={handleRemove}
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />

        <View>
          <ListItemSeparator />
          <View style={styles.fee}>
            <Text style={styles.text}>Subtotal:</Text>
            <Text style={styles.text}>${parseFloat(900).toFixed(2)}</Text>
          </View>
          <View style={styles.fee}>
            <Text style={styles.text}>Discount:</Text>
            <Text style={styles.text}>${parseFloat(100).toFixed(2)}</Text>
          </View>
          <View style={styles.fee}>
            <Text style={styles.text}>Delivery fee:</Text>
            <Text style={styles.text}>${parseFloat(5.0).toFixed(2)}</Text>
          </View>
          <AppButtonBg text={"Checkout"} compStyle={{ marginTop: 30 }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  fee: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
    opacity: 0.5,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default Cart;
