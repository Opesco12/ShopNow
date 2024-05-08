import { StyleSheet, Text, TextInput, View } from "react-native";

const AppTextInput = ({ placeholder, icon }) => {
  return (
    <View>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.light,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 8,
    paddingHorizontal: 15,
    height: 55,
  },
});

export default AppTextInput;
