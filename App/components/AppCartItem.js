import { Text, StyleSheet, View,Image, TouchableWithoutFeedback } from 'react-native';
import {AntDesign, Feather} from "@expo/vector-icons";

import colors from '../config/colors';
import { useState } from 'react';




const AppCartItem = ({id, imgUrl, name, price, onPress}) => {
    const [count, setCount] = useState(1)
    return <View style={styles.cartItem}>

    <View style={styles.cartImgContainer}><Image src={imgUrl} style={styles.cartImage}/>
    </View>
    
    <View style={styles.details}>
        <View style={styles.top}>
        <Text style={styles.text}>{name}</Text>
        <TouchableWithoutFeedback onPress={() => onPress(id)}>
        <Feather name='x' size={18} style={styles.remove}/>
        </TouchableWithoutFeedback>
        </View>
        <View style={styles.bottom}>
        <Text style={styles.text}>${parseFloat(price).toFixed(2)}</Text>
        <View style={styles.bottomRight}>

            <TouchableWithoutFeedback onPress={() =>{
                if (count > 1) {
                    setCount(prev => prev - 1)
                }
            }}>
            <View style={styles.smallBox}>
                <AntDesign name='minus' size={15}/>
            </View>
            </TouchableWithoutFeedback>
            <Text style={styles.count}>{count}</Text>

            <TouchableWithoutFeedback onPress={() => {
                setCount(prev => prev + 1)
            }}>
                <View style={[styles.smallBox, {borderColor:colors.primary}]}>
                <AntDesign name='plus' size={15}/>
                </View>
            </TouchableWithoutFeedback>
        </View>
        </View>
    </View>
</View>
}


const styles = StyleSheet.create({
    bottom: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bottomRight: {
        alignItems: "center",
        flexDirection: "row",
        gap: 10
    },
    cartItem: {
        flexDirection: "row",
        gap: 15
    },
    cartImgContainer: {
        backgroundColor: colors.light,
        borderRadius: 10,
    },
    cartImage: {
        height: 120,
        width: 120
    },
    count: {
        fontSize: 18,
        fontWeight: "700"
    },
    details: {
        flex: 1,
        justifyContent: "space-between"
    },
    remove:{
        opacity: 0.5,
    },
    smallBox: {
        alignItems:"center",
        borderWidth: 1.5,
        borderColor: colors.light,
        borderRadius: 5,
        height:30,
        justifyContent: "center",
        width: 30
    }, 
    text: {
        fontSize: 20,
        fontWeight:"700"
    },
    top: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    }

})

export default AppCartItem