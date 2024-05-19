import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useContext } from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";
import AppBackButton from "../components/AppBackButton";
import ListItemSeparator from "../components/ListItemSeparator";

import CartContext from "../context/CartContext";
import FavoritesContext from "../context/FavoritesContext";

const ProductDeatails = ({ route }) => {
  const product = route.params.product || {};

  const Navigation = useNavigation();

  const { addToCart, cart } = useContext(CartContext);
  const { favorites, addToFavorites } = useContext(FavoritesContext);

  const handleAddToCart = (item) => {
    const itemInCart = cart.some((cartItem) => cartItem.id === item.id);
    if (!itemInCart) {
      addToCart(item);

      showMessage({
        type: "success",
        message: "Product added cart",
        description: `${item.title} have been added to your cart`,
      });
    } else {
      showMessage({
        type: "error",
        message: "Product is already in your cart",
        description: `${item.title} is already in your cart`,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ height: "60%" }}>
        <Swiper
          autoplay={true}
          autoplayTimeout={5}
          activeDotColor={colors.primary}
        >
          {product &&
            product.images.map((url, index) => (
              <Image src={url} style={styles.image} key={index} />
            ))}
        </Swiper>
        <AppBackButton compStyle={styles.backButton} />
      </View>
      <View style={styles.details}>
        <View>
          <View style={styles.productTitle}>
            <Text style={styles.productName}>{product && product.title}</Text>
            <AntDesign
              name={favorites.includes(product) ? "heart" : "hearto"}
              size={24}
              color={
                favorites.includes(product) ? colors.primary : colors.black
              }
              onPress={() => addToFavorites(product)}
            />
          </View>

          <View style={styles.rating}>
            <MaterialCommunityIcons
              name="star"
              size={18}
              color={colors.primary}
            />

            <Text style={styles.ratingText}>{product && product.rating}</Text>
          </View>

          <View style={styles.category}>
            <Text style={styles.description}>Category {">"} </Text>
            <Pressable
              onPress={() =>
                Navigation.navigate("Category", { category: product.category })
              }
            >
              <Text style={[styles.description, { color: colors.primary }]}>
                {product.category}
              </Text>
            </Pressable>
          </View>

          <Text style={styles.description}>
            {product && product.description}
          </Text>
        </View>
        <View>
          <ListItemSeparator />
          <View style={styles.priceDetails}>
            <View>
              <Text
                style={[
                  styles.price,
                  { opacity: 0.4, textDecorationLine: "line-through" },
                ]}
              >
                $
                {product &&
                  parseFloat(
                    product.price -
                      (product.price * product.discountPercentage) / 100
                  ).toFixed(2)}
              </Text>
              <Text style={styles.price}>
                ${product && parseFloat(product.price).toFixed(2)}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAddToCart(product)}
            >
              <View>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: colors.light,
    position: "absolute",
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    padding: 20,
    width: "65%",
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
  category: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5,
  },
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  description: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 5,
    opacity: 0.5,
  },
  details: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
    justifyContent: "space-between",
    padding: 15,
  },
  image: {
    height: 600,
    width: "100%",
    alignSelf: "center",
  },
  price: {
    fontSize: 25,
    fontWeight: "800",
    alignSelf: "center",
  },
  priceDetails: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 25,
    fontWeight: "700",
  },
  productTitle: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rating: {
    alignSelf: "flex-start",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: 15,
    borderColor: colors.light,
    flexDirection: "row",
    marginVertical: 5,
    padding: 3,
  },
  ratingText: {
    fontSize: 15,
    fontWeight: "600",
    opacity: 0.6,
    paddingRight: 2,
  },
});

export default ProductDeatails;
