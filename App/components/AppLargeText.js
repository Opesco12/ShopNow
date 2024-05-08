import {StyleSheet, Text,View} from 'react-native';


const LargeText = ({text}) => {
    return <Text style={styles.largeText}>{text}</Text>
}

const styles = StyleSheet.create({
    largeText: {
        fontSize: 35,
        fontWeight: "800"
    }
})

export default LargeText;