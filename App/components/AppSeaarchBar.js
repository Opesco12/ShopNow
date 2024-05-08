import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const AppSearchBar = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput placeholder="Search" style={styles.input} />
      <Feather name="search" size={24} onPress={() => console.log("Tapped")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    paddingHorizontal: 15,
    height: 55,
  },
  input: {
    height: "100%",
    fontSize: 18,
    fontWeight: "500",
    width: "90%",
  },
});

export default AppSearchBar;
