import { StyleSheet, View, Text, FlatList } from "react-native";
import { useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { AppButtonBg } from "../components/Button";
import AppCartItem from "../components/AppCartItem";
import AppHeader from "../components/AppHeader";
import ListItemSeparator from "../components/ListItemSeparator";

import CartContext from "../context/CartContext";

const Cart = () => {
  const Navigation = useNavigation();
  const [CartItems, setCartItems] = useState([]);
  const [subtotalPrice, setSubTotalPrice] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const {
    addToCart,
    cart,
    reduceQuantity,
    removeProductFromCart,
    getUniqueCart,
    getSubTotalPrice,
    getDeliveryFee,
    discount,
    getTotalPrice,
  } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  useEffect(() => {
    setCartItems(getUniqueCart(cart));
    setSubTotalPrice(getSubTotalPrice());
    setDeliveryFee(getDeliveryFee());
    setTotalPrice(getTotalPrice());
  }, [cart]);
  return (
    <View style={styles.container}>
      <AppHeader showCartIcon={false} text={"My Cart"} />

      <View style={styles.content}>
        {cart.length !== 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            data={CartItems}
            renderItem={({ item, index }) => (
              <AppCartItem
                product={item}
                key={index}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={reduceQuantity}
                handleRemoveProductFromCart={removeProductFromCart}
                cartLength={cart.length}
              />
            )}
            ItemSeparatorComponent={() => <ListItemSeparator />}
          />
        ) : (
          <View style={styles.emptyView}>
            <Text style={{ fontSize: 16 }}>Your Cart is empty</Text>
          </View>
        )}

        <View>
          <ListItemSeparator />
          <View style={styles.fee}>
            <Text style={styles.text}>Subtotal:</Text>
            <Text style={styles.text}>
              ${parseFloat(subtotalPrice).toFixed(2)}
            </Text>
          </View>
          <View style={styles.fee}>
            <Text style={styles.text}>Discount:</Text>
            <Text style={styles.text}>${parseFloat(discount).toFixed(2)}</Text>
          </View>
          <View style={styles.fee}>
            <Text style={styles.text}>Delivery fee:</Text>
            <Text style={styles.text}>
              ${parseFloat(deliveryFee).toFixed(2)}
            </Text>
          </View>

          <View style={styles.fee}>
            <Text style={styles.text}>Total:</Text>
            <Text style={styles.text}>
              ${parseFloat(totalPrice).toFixed(2)}
            </Text>
          </View>

          <AppButtonBg
            text={"Checkout"}
            compStyle={{ marginTop: 30, opacity: cart.length > 0 ? 1 : 0.5 }}
            onPress={() => {
              if (cart.length > 0) {
                Navigation.navigate("Checkout");
              }
            }}
          />
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
  emptyView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  fee: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 25,
    opacity: 0.5,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default Cart;
