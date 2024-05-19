import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

import colors from "../config/colors";
import AppHeader from "../components/AppHeader";
import Box from "../components/Box";

const ProductCategoryScreen = ({ route }) => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const category = route.params.category || "";
  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => {
        setCategoryProducts(res.data.products);
        setTimeout(() => {
          setIsFetching(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, [category]);
  return (
    <View style={styles.container}>
      <AppHeader text={category && category} />
      {isFetching ? (
        <View>
          <ActivityIndicator size={"large"} color={colors.primary} />
        </View>
      ) : (
        <View style={styles.products}>
          {categoryProducts.map((product, index) => (
            <Box product={product} key={index} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 10,
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
    justifyContent: "space-between",
  },
});

export default ProductCategoryScreen;
