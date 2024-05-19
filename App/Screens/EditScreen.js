import { StyleSheet, Text, View } from "react-native";
import AppHeader from "../components/AppHeader";

const EditScreen = ({ route }) => {
  const content = route.params.content || "";
  return (
    <View style={styles.container}>
      <AppHeader text={content && content} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default EditScreen;
