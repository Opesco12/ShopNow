import { StyleSheet, View } from "react-native";

import { categories } from "../../api";
import AppCategoryBox from "../components/AppCategoryBox.";
import AppHeader from "../components/AppHeader";

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader text={"Categories"} />

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
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
});

export default CategoryScreen;
