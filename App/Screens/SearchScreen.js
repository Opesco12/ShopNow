import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import axios from "axios";

import colors from "../config/colors";
import AppSearchBar from "../components/AppSeaarchBar";
import AppHeader from "../components/AppHeader";
import Box from "../components/Box";

const SearchScreen = ({ route }) => {
  const searchText = route.params && route.params.searchResult;
  const [searchResult, setSearchResult] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const handleSearch = (text) => {
    setNoResult(false);
    setIsFetching(true);
    axios
      .get(`https://dummyjson.com/products/search?q=${text}`)
      .then((res) => {
        if (res.data.products.length > 0) {
          setNoResult(false);
          setSearchResult(res.data.products);
          setTimeout(() => {
            setIsFetching(false);
          }, 2000);
        } else {
          setNoResult(true);
          setTimeout(() => {
            setIsFetching(false);
          }, 2000);
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
      >
        <AppHeader text={"Search"} />
        <AppSearchBar
          style={{ marginBottom: 20 }}
          handleSearch={handleSearch}
          value={searchText && searchText.length > 0 && searchText}
        />

        {isFetching ? (
          <View style={styles.loader}>
            <ActivityIndicator color={colors.primary} size={"large"} />
          </View>
        ) : noResult ? (
          <View
            style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              No Results found
            </Text>
          </View>
        ) : (
          <View style={styles.products}>
            {searchResult.map((product, index) => (
              <Box key={index} product={product} />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  loader: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 7,
  },
});

export default SearchScreen;
