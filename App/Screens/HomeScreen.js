import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  Pressable,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import SwiperFlatList from "react-native-swiper-flatlist";

import colors from "../config/colors";
import AppTextInput from "../components/AppTextInput";
import AppCategoryBox from "../components/AppCategoryBox.";
import Box from "../components/Box";
import { categories } from "../../api";
import AppSearchBar from "../components/AppSeaarchBar";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [loaded, error] = useFonts({
    poppins: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  if (error) console.log(error);

  const [selectedCategory, SetSelectedCategory] = useState("All");

  const handleSelect = (text) => {
    SetSelectedCategory(text);
  };

  const Navigation = useNavigation();

  const handleSearch = (searchText) => {
    Navigation.navigate("Search", { searchText: searchText });
  };

  const handleCategorySelection = (category) => {
    Navigation.navigate("Category", { category: category });
  };

  useEffect(() => {
    setIsFetching(true);
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setTimeout(() => {
          setIsFetching(false);
        }, 1500);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0, 3]}
        stickyHeaderHiddenOnScroll={false}
      >
        <View style={{ backgroundColor: colors.white }}>
          <View style={styles.top}>
            <Text style={styles.appName}>Discover</Text>
            <Feather
              name="shopping-cart"
              size={22}
              onPress={() => Navigation.navigate("Cart")}
            />
          </View>
        </View>

        <AppSearchBar handleSearch={handleSearch} />

        <Image
          source={require("../assets/Clearance Sales.png")}
          style={styles.promoImage}
        />

        <View style={styles.categories}>
          <View style={styles.stickyHeader}>
            <Text style={styles.stickyHeaderText}>Categories</Text>
            <Pressable onPress={() => Navigation.navigate("Categories")}>
              <Text
                style={[
                  styles.stickyHeaderText,
                  {
                    color: colors.primary,
                    fontSize: 15,
                  },
                ]}
              >
                See all
              </Text>
            </Pressable>
          </View>

          <ScrollView
            alwaysBounceHorizontal={true}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ flexDirection: "row", gap: 7, marginBottom: 10 }}>
              <AppCategoryBox
                text={"All"}
                selected={selectedCategory}
                select={handleSelect}
                onPress={handleCategorySelection}
              />
              {categories.map((category, index) => {
                return (
                  <AppCategoryBox
                    text={category}
                    key={index}
                    selected={selectedCategory}
                    select={handleSelect}
                    onPress={handleCategorySelection}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>

        {isFetching ? (
          <View>
            <ActivityIndicator color={colors.primary} size={"large"} />
          </View>
        ) : (
          <View style={styles.products}>
            {products.map((product, index) => {
              return <Box key={index} product={product} />;
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  appName: {
    fontSize: 25,
    fontWeight: "700",
  },
  categories: {
    backgroundColor: colors.white,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 10,
  },
  products: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  promoImage: {
    resizeMode: "contain",
    width: "100%",
  },
  stickyHeader: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: "space-between",
  },
  stickyHeaderText: {
    fontSize: 22,
    fontWeight: "700",
  },
  top: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingVertical: 5,
  },
});

export default HomeScreen;
