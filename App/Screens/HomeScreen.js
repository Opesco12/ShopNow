import { StyleSheet, ScrollView, Image, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Axios } from "axios";

import colors from "../config/colors";
import AppTextInput from "../components/AppTextInput";
import AppCategoryBox from "../components/AppCategoryBox.";
import Box from "../components/Box";
import { products, categories } from "../../api";
import { useState } from "react";
import AppSearchBar from "../components/AppSeaarchBar";

const HomeScreen = () => {
  const [loaded, error] = useFonts({
    poppins: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  if (error) console.log(error);

  const [selectedCategory, SetSelectedCategory] = useState("All");

  const handleSelect = (text) => {
    SetSelectedCategory(text);
  };

  return (
    <>
      {loaded && (
        <View style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={true}
          >
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "700" }}>Discover</Text>
              <Feather name="shopping-cart" size={22} />
            </View>

            <AppSearchBar />

            <Image
              source={require("../assets/Clearance Sales.png")}
              style={styles.promoImage}
            />
            <View style={styles.categories}>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  marginBottom: 5,
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 22, fontWeight: "700" }}>
                  Categories
                </Text>
                <Text
                  style={{
                    color: colors.primary,
                    fontSize: 15,
                    fontWeight: "700",
                  }}
                >
                  See all
                </Text>
              </View>

              <ScrollView
                alwaysBounceHorizontal={true}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{ flexDirection: "row", gap: 7, marginBottom: 10 }}
                >
                  <AppCategoryBox
                    text={"All"}
                    selected={selectedCategory}
                    select={handleSelect}
                  />
                  {categories.map((category, index) => {
                    return (
                      <AppCategoryBox
                        text={category}
                        key={index}
                        selected={selectedCategory}
                        select={handleSelect}
                      />
                    );
                  })}
                </View>
              </ScrollView>
            </View>

            <View style={styles.products}>
              {products.map((product, index) => {
                return <Box key={index} product={product} />;
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  categories: {},
  container: {
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
});

export default HomeScreen;
