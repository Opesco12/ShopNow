import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import colors from "../config/colors";

const AppCategoryBox = ({ selected, text, select, onPress }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        select(text);
        if (text !== "All") onPress(text);
      }}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: selected === text ? colors.primary : colors.white,
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            { color: selected === text ? colors.white : colors.primary },
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 7,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 10,
  },
  text: {
    fontWeight: "500",
    fontSize: 16,
  },
});

export default AppCategoryBox;
