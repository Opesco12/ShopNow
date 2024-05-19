import { TouchableOpacity, StyleSheet, View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AppBackButton = ({ compStyle }) => {
  const Navigation = useNavigation();
  const handleGoBack = () => {
    Navigation.goBack();
  };
  return (
    <TouchableOpacity
      onPress={handleGoBack}
      style={[styles.backButton, compStyle]}
    >
      <MaterialCommunityIcons name="chevron-left" size={34} />
    </TouchableOpacity>
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
    backgroundColor: colors.white,
    width: 37,
  },
});

export default AppBackButton;
