import {StyleSheet, Text,View} from 'react-native';
import LargeText from '../components/AppLargeText';
import AppTextInput from '../components/AppTextInput';
import { AppButtonBg } from '../components/Button';
import colors from '../config/colors';


const LoginScreen = () => {
    return <View  style={styles.container}>
        <LargeText text={"Welcome Back!"}/>
        <Text style={styles.text}>Sign in to your account</Text>

        <View style={{flex: 1,justifyContent: "space-between"}}>
            <View>
        <AppTextInput placeholder={"Email"}/>
        <AppTextInput placeholder={"Password"}/>
        <Text style={[styles.text, {marginBottom: 0, textAlign: "right"}]}>Forgot Password?</Text>
        <AppButtonBg text={"Login"}/>
            </View>

        <Text style={styles.bottomText}>Don't have an account? <Text style={{color: colors.primary}}>Sign Up</Text></Text>
        </View>
    </View>
}


const  styles = StyleSheet.create({
    bottomText: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 15,
    },
    container: {
        flex: 1,
        paddingTop: 60,
        padding: 10,
    },
    text: {
        fontSize: 17,
        fontWeight: "600",
        marginBottom: 40,
        opacity: 0.5,
    }
})

export default LoginScreen