import { StyleSheet, Text, Modal, View, Pressable, Button } from "react-native";
import { useContext, useEffect, useState } from "react";
import { FlutterwaveButton } from "flutterwave-react-native";
import axios from "axios";
import FlutterwaveCheckout from "flutterwave-react-native";

import AppBackButton from "../components/AppBackButton";
import colors from "../config/colors";
import AppHeader from "../components/AppHeader";
import { AppButtonBg } from "../components/Button";
import CartContext from "../context/CartContext";

const CheckOutScreen = () => {
  // FlutterwaveCheckout.set
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [subtotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const { getSubTotalPrice, getDeliveryFee, discount, getTotalPrice } =
    useContext(CartContext);

  const handleCheckout = async () => {
    const flutterwavePublicKey =
      "FLWPUBK_TEST-53a9b043f7ea87a0b4c883b212d038a0-X";
    const paymentData = {
      tx_ref: "unique-reference-id",
      amount: totalPrice,
      currency: "NGN",
      // redirect_url: "https://your-redirect-url.com",
      payment_options: "card",
      customer: {
        email: "customer@example.com",
        phonenumber: "08145298341",
        name: "John Doe",
      },
    };

    try {
      const response = await axios.post(
        "https://api.flutterwave.com/v3/payments",
        paymentData,
        {
          headers: {
            Authorization: `Bearer ${flutterwavePublicKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      // Handle the response data, which includes the payment link or payment instructions
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  useEffect(() => {
    setSubTotalPrice(getSubTotalPrice());
    setDeliveryFee(getDeliveryFee());
    setTotalPrice(getTotalPrice());
  }, []);
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
        <AppButtonBg
          text={"Submit Order"}
          onPress={() => setIsVisible(!isVisible)}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={isVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable onPress={() => setIsVisible(!isVisible)}>
                <Text style={styles.cancel}>cancel</Text>
              </Pressable>
              <FlutterwaveButton
                style={styles.paymentButton}
                // disabled={disabled}
              >
                <Text style={styles.paymentButtonText}>Pay ${totalPrice}</Text>
              </FlutterwaveButton>
            </View>
          </View>
        </Modal>
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
