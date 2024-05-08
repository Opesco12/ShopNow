import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import { useState } from "react";
import {
  StripeProvider,
  CardField,
  useConfirmPayment,
} from "@stripe/stripe-react-native";
import ReactNativeModal from "react-native-modal";

import colors from "../config/colors";

const DeviceWidth = Dimensions.get("window").width;

const CheckOutScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <StripeProvider publishableKey="pk_test_51PE7JJ2Ko5agVUkjc03WFbbyrT8eoq1j1hqFvIa45sZz5iQihu1N3z9N0TTRZeJM39onWhqmTGku95gz9RQ8gCoU00sNp9NESl">
      <View style={styles.container}>
        <Text>This is the checkout screen</Text>
      </View>
      <ReactNativeModal
        transparent={true}
        visible={modalVisible}
        style={{ margin: 0 }}
        onBackdropPress={() => setModalVisible(false)}
        swipeDirection={"down"}
        swipeThreshold={150}
        onSwipeComplete={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: colors.light,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              width: "100%",
              height: 500,
            }}
          >
            <CardField
              placeholders={{ number: "0000 0000 0000 0000" }}
              cardStyle={{
                backgroundColor: colors.light,
                textColor: colors.primary,
              }}
              style={{ width: "100%", height: 50, marginVertical: 8 }}
            />
            <Button title="Pay" onPress={() => setModalVisible(true)} />
          </View>
        </View>
      </ReactNativeModal>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  modalContainer: {
    backgroundColor: colors.primary,
    height: 300,
    margin: 0,
  },
});

export default CheckOutScreen;
