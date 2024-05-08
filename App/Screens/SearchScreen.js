import { StyleSheet, ScrollView, Image, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Axios } from "axios";

import colors from "../config/colors";
import AppSearchBar from "../components/AppSeaarchBar";
import AppBackButton from "../components/AppBackButton";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
      >
        <View style={styles.header}>
          <AppBackButton
            compStyle={{
              backgroundColor: colors.light,
              position: "relative",
              left: 0,
              top: 0,
            }}
          />
          <Feather name="shopping-cart" size={24} />
        </View>
        <AppSearchBar style={{ marginBottom: 20 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
});

export default SearchScreen;
