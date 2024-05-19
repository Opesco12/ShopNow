import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

const Box = ({ product }) => {
  const Navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Navigation.navigate("Product", { product: product })}
    >
      <View style={styles.imageContainer}>
        <Image src={product.thumbnail} style={styles.image} />
      </View>
      <View style={styles.details}>
        <View style={styles.top}>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.rating}>
            <MaterialCommunityIcons name="star" size={15} color={"gold"} />
            <Text>{product.rating}</Text>
          </View>
        </View>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    backgroundColor: colors.light,
    borderColor: colors.light,
    borderRadius: 18,
    borderWidth: 1,
    height: 200,
    overflow: "hidden",
    width: "48%",
  },
  details: {
    flex: 1,
    justifyContent: "space-between",
    padding: 3,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 18,
    height: "70%",
    justifyContent: "center",
    overflow: "hidden",
  },
  price: { alignSelf: "flex-end", fontSize: 20, fontWeight: "700" },
  rating: {
    flexDirection: "row",
  },
  title: { fontSize: 16, fontWeight: "500", opacity: 0.7, width: "75%" },
  top: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Box;
