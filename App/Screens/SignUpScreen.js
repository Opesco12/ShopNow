import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwprds must match")
    .required("Confirm Password is required"),
  firstName: Yup.string().min(1).required("First Name is required"),
  lastName: Yup.string().min(1).required("Last Name is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
});

const SignUpScreen = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LargeText text={"Sign Up"} />
        <Text style={styles.text}>
          Create an account so you can order your favorite products easily and
          quickly
        </Text>

        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              confirmPassword: "",
              email: "",
              firstName: "",
              lastName: "",
              password: "",
              phoneNumber: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              Navigation.navigate("Main");
            }}
          >
            {({ handleSubmit }) => (
              <View>
                <AppFormField
                  autoFocus
                  name="firstName"
                  placeholder={"First Name"}
                />
                <AppFormField name="lastName" placeholder={"Last Name"} />
                <AppFormField
                  name={"email"}
                  type="email-address"
                  placeholder="Email"
                />
                <AppFormField
                  placeholder={"Phone Number"}
                  name={"phoneNumber"}
                  type="number-pad"
                />
                <AppFormField
                  placeholder={"Password"}
                  name={"password"}
                  secureTextEntry
                />
                <AppFormField
                  placeholder={"Confirm Password"}
                  name={"confirmPassword"}
                  secureTextEntry
                />

                <AppButtonBg text={"Register Now"} onPress={handleSubmit} />
              </View>
            )}
          </Formik>

          <Text style={styles.bottomText}>
            Already have an account?{" "}
            <Pressable
              onPress={() => Navigation.navigate("Login")}
              style={{ justifyContent: "center" }}
            >
              <Text style={{ color: colors.primary, fontWeight: "500" }}>
                Log in
              </Text>
            </Pressable>
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
    marginBottom: 30,
    opacity: 0.5,
    width: "80%",
  },
});

export default SignUpScreen;
