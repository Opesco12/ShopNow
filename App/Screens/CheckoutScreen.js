import { StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { PayWithFlutterwave } from "flutterwave-react-native";
import { showMessage } from "react-native-flash-message";

import colors from "../config/colors";
import AppHeader from "../components/AppHeader";
import CartContext from "../context/CartContext";
import { useNavigation } from "@react-navigation/native";

const CheckOutScreen = () => {
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [subtotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { getSubTotalPrice, getDeliveryFee, discount, getTotalPrice, setCart } =
    useContext(CartContext);

  const generateRef = (length) => {
    var a =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(
        ""
      );
    var b = [];
    for (var i = 0; i < length; i++) {
      var j = (Math.random() * (a.length - 1)).toFixed(0);
      b[i] = a[j];
    }
    return b.join("");
  };

  useEffect(() => {
    setSubTotalPrice(getSubTotalPrice());
    setDeliveryFee(getDeliveryFee());
    setTotalPrice(getTotalPrice());
  }, []);
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AppHeader text={"Checkout"} showCartIcon={false} />

      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <View style={styles.box}>
            <Text style={styles.boxHeader}>Order Summary</Text>

            <View style={styles.boxDetails}>
              <Text style={styles.boxText}>Subtotal: </Text>
              <Text style={styles.boxText}>
                ${parseFloat(subtotalPrice).toFixed(2)}
              </Text>
            </View>

            <View style={styles.boxDetails}>
              <Text style={styles.boxText}>Discount: </Text>
              <Text style={styles.boxText}>
                ${parseFloat(discount).toFixed(2)}
              </Text>
            </View>

            <View style={styles.boxDetails}>
              <Text style={styles.boxText}>Delivery: </Text>
              <Text style={styles.boxText}>
                ${parseFloat(deliveryFee).toFixed(2)}
              </Text>
            </View>

            <View style={styles.boxDetails}>
              <Text style={styles.boxText}>Total: </Text>
              <Text style={styles.boxText}>
                ${parseFloat(totalPrice).toFixed(2)}
              </Text>
            </View>
          </View>

          <Text style={[styles.boxHeader, { marginBottom: 10 }]}>
            Please confirm and submit your order
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", opacity: 0.5 }}>
            By clicking submit order, you agree to Terms of use and privacy
            policy
          </Text>
        </View>
        <PayWithFlutterwave
          onRedirect={(response) => {
            if (response.status === "successful") {
              showMessage({ message: "Payment Succesful", type: "success" });
              setCart([]);
              Navigation.navigate("Cart");
            } else {
              showMessage({ message: "Payment failed", type: "danger" });
            }
          }}
          onAbort={() => {
            showMessage({ message: "Payment failed", type: "danger" });
          }}
          options={{
            tx_ref: generateRef(11),
            amount: totalPrice,
            currency: "USD",
            customer: {
              email: "oyelekemmanuel@gmail.com",
            },
            authorization: "FLWPUBK_TEST-53a9b043f7ea87a0b4c883b212d038a0-X",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.light,
    gap: 15,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  boxHeader: {
    fontWeight: "600",
    fontSize: 18,
  },
  boxDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxText: {
    fontSize: 16,
    fontWeight: "500",
  },
  cancel: {
    color: "#2196F3",
    fontSize: 15,
    textAlign: "right",
    marginBottom: 20,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 0,
  },
  modalView: {
    backgroundColor: colors.white,
    borderRadius: 25,
    height: "65%",
    margin: 0,
    padding: 15,
    elevation: 15,
  },
});

export default CheckOutScreen;
