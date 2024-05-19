import { StyleSheet, ScrollView, Text, View, Pressable } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

import LargeText from "../components/AppLargeText";
import AppTextInput from "../components/AppTextInput";
import { AppButtonBg } from "../components/Button";
import colors from "../config/colors";
import AppFormField from "../components/AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please input a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must contain at least 5 characters")
    .required("Password is required "),
});

const LoginScreen = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LargeText text={"Welcome Back!"} />
        <Text style={styles.text}>Sign in to your account</Text>

        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
              Navigation.navigate("Main");
            }}
            validationSchema={validationSchema}
          >
            {({ handleSubmit }) => (
              <>
                <View>
                  <AppFormField
                    placeholder={"Email"}
                    type={"email-address"}
                    name="email"
                    autoFocus
                  />
                  <AppFormField
                    placeholder={"Password"}
                    secureTextEntry
                    name="password"
                  />
                  <Text
                    style={[
                      styles.text,
                      { marginBottom: 0, textAlign: "right" },
                    ]}
                  >
                    Forgot Password?
                  </Text>
                  <AppButtonBg text={"Login"} onPress={handleSubmit} />
                </View>
              </>
            )}
          </Formik>

          <Text style={styles.bottomText}>
            Don't have an account?
            <Text style={{ color: colors.primary }}>Sign Up</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomText: {
    alignItems: "center",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 15,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 40,
    opacity: 0.5,
  },
});

export default LoginScreen;
