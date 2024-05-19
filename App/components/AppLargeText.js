import { StyleSheet, Text, View } from "react-native";

const LargeText = ({ text }) => {
  return <Text style={styles.largeText}>{text}</Text>;
};

const styles = StyleSheet.create({
  largeText: {
    fontSize: 30,
    fontWeight: "800",
    marginTop: 60,
  },
});

export default LargeText;
