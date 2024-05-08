import { Text, StyleSheet, Image,View, StatusBar, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { Axios } from 'axios';

import colors from '../config/colors';
import AppBackButton from '../components/AppBackButton';
import ListItemSeparator from '../components/ListItemSeparator';
import products from '../../api';

const ProductDeatails = () => {
// const test = () => {
//     Axios.get("https://dummyjson.com/products/category/smartphones").then(res => console.log(res)).catch(err => console.log(err))
//             }

    return <View style={styles.container}>
<StatusBar translucent={true}/>
<Image source={require("../assets/iphone_13_1.png")} src={products[1].images[0]} style={styles.image}/>
<AppBackButton/>
    <View style={styles.details}>
        <View>

    <Text style={styles.productName}>{products[1].title}</Text>
    <View style={styles.rating}>
        <MaterialCommunityIcons name='star' size={18} color={colors.primary}/>
        <Text style={styles.ratingText}>{products[1].rating}</Text>
    </View>
    <Text style={styles.description}>{products[1].description}</Text>
        </View>
<View>
<ListItemSeparator />
        <View style={styles.priceDetails}>
            <View>
            <Text style={[styles.price,{opacity: 0.4, textDecorationLine: "line-through"
            } ]}>${parseFloat(products[1].price - (products[1].price * products[1].discountPercentage/100)).toFixed(2)}</Text>
            <Text style={styles.price}>${parseFloat(products[1].price).toFixed(2)}</Text>
            </View>
                <TouchableOpacity style={styles.button} >
            <View>
                <Text style={styles.buttonText}>Add to Cart</Text>
            </View>
                </TouchableOpacity>
        </View>
        </View>
    </View>
    </View>
}

const styles = StyleSheet.create({   
    button: {
        alignItems: "center",
        backgroundColor: colors.primary,
        borderRadius: 20,
        justifyContent: "center",
        padding: 20,
        width: "65%"
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "700",
    },
    container: {
        backgroundColor: colors.light,
        flex: 1
    },
    description: {
        fontSize: 18,
        fontWeight: "500",
        marginTop: 5,
        opacity: 0.5
    },
    details:{
        backgroundColor:colors.white,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        flex: 1,
        justifyContent: "space-between",
        padding:15
    },
    image: {
        height: 450,
         width: 450,
         alignSelf: "center"
    }, 
    price: {
        fontSize: 25,
        fontWeight: "800", 
        alignSelf: "center",
        // paddingLeft: 10
    },
    priceDetails: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    productName:{
        fontSize: 25,
        fontWeight: "700"
    },
    rating: {
        alignSelf: "flex-start",
        alignItems: "center",
        borderWidth: 1.5,
        borderRadius: 15,
        borderColor: colors.light,
        flexDirection: "row",
        marginVertical: 5,
        padding: 3
    },
    ratingText: {
        fontSize: 15,
        fontWeight: "600",
        opacity: 0.6,
        paddingRight: 2
    }
})

export default ProductDeatails