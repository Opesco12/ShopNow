import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import AppBackButton from "./AppBackButton";

const AppHeader = ({
  text,
  compStyle,
  showCartIcon = true,
  showText = true,
}) => {
  const Navigation = useNavigation();
  return (
    <View style={styles.header}>
      <AppBackButton
        compStyle={[
          {
            backgroundColor: colors.light,
            position: "relative",
            left: 0,
            top: 0,
          },
          compStyle,
        ]}
      />
      <Text style={[styles.headerText, { opacity: showText ? 1 : 0 }]}>
        {text}
      </Text>
      <Feather
        name="shopping-cart"
        size={24}
        style={{ opacity: showCartIcon ? 1 : 0 }}
        onPress={() => {
          if (showCartIcon) Navigation.navigate("Cart");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default AppHeader;
