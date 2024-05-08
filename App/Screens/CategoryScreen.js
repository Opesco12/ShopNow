import { Text, StyleSheet, View, Dimensions } from "react-native";

import AppBackButton from "../components/AppBackButton";
import { categories } from "../../api";
import AppCategoryBox from "../components/AppCategoryBox.";

// const width = Dimensions.get("window").width;
// console.log(width);

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <AppBackButton />
      <Text style={styles.header}>Categories</Text>
      <View style={styles.categories}>
        <AppCategoryBox text={"All"} />
        {categories.map((category, index) => {
          return <AppCategoryBox text={category} key={index} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
  },
  container: {
    flex: 1,
    padding: 15,
    // backgroundColor: colors.light
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 25,
  },
});

export default CategoryScreen;
