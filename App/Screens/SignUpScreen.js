import {StyleSheet, Text,View} from 'react-native';
import LargeText from '../components/AppLargeText';
import AppTextInput from '../components/AppTextInput';
import { AppButtonBg } from '../components/Button';

import colors from '../config/colors';


const SignUpScreen = () => {
    return  <View style={styles.container}>
        <LargeText text={"Sign Up"}/>
        <Text style={styles.text}>Create an account so you can order your favorite products easily and quickly</Text>

        <View style={{flex: 1,justifyContent: "space-between"}}>
            <View>
        <AppTextInput placeholder={"Email"}/>
        <AppTextInput placeholder={"Phone Number"}/>
        <AppTextInput placeholder={"Password"}/>
        <AppTextInput placeholder={"Confirm Password"}/>
        <AppButtonBg text={"Register Now"}/>
        </View>

        <Text style={styles.bottomText}>Already have an account? <Text style={{color: colors.primary}}>Log in</Text></Text>
        </View>
    </View>
}


const styles = StyleSheet.create({
    bottomText: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 15,
    },
    container: {
        flex: 1,
        paddingTop: 60,
        padding: 10
    },
    text: {
        fontSize: 17,
        fontWeight: "600",
        marginBottom: 30,
        opacity: 0.5,
        width: "80%"
    }
})

export default SignUpScreen;