import { Text, ScrollView, StyleSheet, View } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

import colors from "../config/colors";
import AppHeader from "../components/AppHeader";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Data = [
  {
    title: "Personal Details",
    data: ["Oyeleke Emmanuel", "oyelekemmanuel@gmail.com"],
  },
  { title: "Orders", data: ["Order History", "Shipping Address"] },
  {
    title: "Security",
    data: ["Change Password", "Logout"],
  },
];

const ProfileScreen = () => {
  const Navigation = useNavigation();
  const handleNavigation = (content) => {
    Navigation.navigate("Edit", { content: content });
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader
          text={"Profile"}
          compStyle={{ backgroundColor: colors.white }}
        />
        <View style={styles.userImage}>
          <FontAwesome5 name="user-alt" color={colors.light} size={100} />
        </View>

        {Data.map((section, index) => {
          return (
            <View style={styles.section} key={index}>
              {section.title === "Personal Details" ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.sectionHeader}>{section.title}</Text>
                  <Feather
                    name="edit-2"
                    size={18}
                    onPress={() => handleNavigation(section.title)}
                  />
                </View>
              ) : (
                <Text style={styles.sectionHeader}>{section.title}</Text>
              )}

              {section.data.map((item, index) =>
                section.title === "Personal Details" ? (
                  <View style={styles.sectionItem} key={index}>
                    <Text style={styles.text}>{item}</Text>
                  </View>
                ) : (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      if (item === "Logout") {
                      } else if (item === "Shipping Address") {
                      } else {
                        handleNavigation(item);
                      }
                    }}
                  >
                    <View
                      style={[
                        styles.sectionItem,
                        {
                          justifyContent: "space-between",
                          flexDirection: "row",
                          alignItems: "center",
                        },
                      ]}
                      key={index}
                    >
                      <Text style={styles.text}>{item}</Text>
                      <MaterialCommunityIcons name="chevron-right" size={15} />
                    </View>
                  </TouchableOpacity>
                )
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    paddingHorizontal: 10,
  },
  userImage: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 70,
    height: 140,
    justifyContent: "center",
    marginBottom: 25,
    width: 140,
  },
  section: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    fontWeight: "500",
    fontSize: 18,
    paddingVertical: 15,
  },
  sectionItem: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.light,
    fontSize: 16,
    paddingVertical: 15,
  },
  text: {
    fontSize: 16,
  },
});

export default ProfileScreen;

//  <View
//                   key={index}
//                   style={[
//                     styles.sectionItem,
//                     {
//                       flexDirection:
//                         section.title === "Orders" ||
//                         section.title === "Security"
//                           ? "row"
//                           : "column",
//                       alignItems:
//                         section.title === "Orders" ||
//                         section.title === "Security"
//                           ? "center"
//                           : "flex-start",
//                       justifyContent: "space-between",
//                     },
//                   ]}
//                 >
//                   {section.title === "Orders" ||
//                   section.title === "Security" ? (
//                     <TouchableOpacity>
//                       <Text>{item}</Text>
//                     </TouchableOpacity>
//                   ) : (
//                     <Text>{item}</Text>
//                   )}
//                   {(section.title === "Orders" ||
//                     section.title === "Security") && (
//
//                   )}
//                 </View>
