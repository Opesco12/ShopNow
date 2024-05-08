import { Text, SectionList, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppBackButton from "../components/AppBackButton";
import colors from "../config/colors";

const Data = [
  {
    title: "Personal Details",
    data: ["Oyeleke Emmanuel", "oyelekemmanuel@gmail.com", "08145298341"],
  },
  { title: "Orders", data: ["Order History", "Shipping Address"] },
  {
    title: "Security",
    data: ["Change Password", "Logout"],
  },
];

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <AppBackButton />
      <Text style={styles.header}>Profile</Text>
      <View style={styles.userImage}></View>
      <SectionList
        contentContainerStyle={styles.sectionContainer}
        sections={Data}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sections}>
            <Text style={styles.sectionHeader}>{title}</Text>
          </View>
        )}
        renderSectionFooter={() => <View style={styles.separator}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    paddingTop: 5,
    marginBottom: 20,
  },
  userImage: {
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 75,
    height: 150,
    width: 150,
  },
  sectionContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: 10,
  },

  sections: {
    // backgroundColor: colors.white,
  },
  sectionHeader: {
    fontWeight: "bold",
  },
  separator: {
    height: 10,
    backgroundColor: colors.light,
  },
});

//  user info  order history shipping address
// SECTIONS =>>>   security(change password, logout), notification, personal(name, email, phone number ),orders(shipping address, order history),

export default ProfileScreen;
