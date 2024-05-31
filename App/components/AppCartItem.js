import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

import colors from "../config/colors";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { useNavigation } from "@react-navigation/native";

const AppCartItem = ({
  cartLength,
  product,
  onPress,
  handleAddToCart,
  handleRemoveFromCart,
  handleRemoveProductFromCart,
}) => {
  const Navigation = useNavigation();
  return (
    <Pressable
      onPress={() => Navigation.navigate("Product", { product: product })}
    >
      <View style={styles.cartItem}>
        <View style={styles.cartImgContainer}>
          <Image src={product.thumbnail} style={styles.cartImage} />
        </View>

        <View style={styles.details}>
          <View style={styles.top}>
            <Text
              style={[
                styles.text,
                {
                  width: "85%",
                },
              ]}
              numberOfLines={1}
            >
              {product.title}
            </Text>
            <TouchableWithoutFeedback
              onPress={() => {
                console.log("Tapped");
                handleRemoveProductFromCart(product);
              }}
            >
              <Feather name="x" size={18} style={styles.remove} />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.text}>
              ${parseFloat(product.price).toFixed(2)}
            </Text>
            <View style={styles.bottomRight}>
              <TouchableWithoutFeedback
                onPress={() => {
                  if (cartLength > 1) {
                    handleRemoveFromCart(product);
                  }
                }}
              >
                <View style={styles.smallBox}>
                  <AntDesign name="minus" size={15} />
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.count}>{product.quantity}</Text>

              <TouchableWithoutFeedback
                onPress={() => handleAddToCart(product)}
              >
                <View style={styles.smallBox}>
                  <AntDesign name="plus" size={15} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bottom: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomRight: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  cartItem: {
    flexDirection: "row",
    gap: 15,
  },
  cartImgContainer: {
    backgroundColor: colors.light,
    borderRadius: 10,
  },
  cartImage: {
    height: 120,
    width: 120,
    borderRadius: 15,
  },
  count: {
    fontSize: 18,
    fontWeight: "700",
  },
  details: {
    flex: 1,
    justifyContent: "space-between",
  },
  remove: {
    opacity: 0.5,
  },
  smallBox: {
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 5,
    height: 30,
    justifyContent: "center",
    width: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
  },
  top: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AppCartItem;
