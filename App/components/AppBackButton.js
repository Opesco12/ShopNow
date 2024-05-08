import { Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppBackButton = ({ compStyle }) => {
  return (
    <View style={[styles.backButton, compStyle]}>
      <MaterialCommunityIcons name="chevron-left" size={34} />
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    alignItems: "center",
    borderRadius: 18.5,
    height: 37,
    justifyContent: "center",
    left: 20,
    top: 10,
    position: "absolute",
    backgroundColor: colors.white,
    width: 37,
  },
});

export default AppBackButton;
