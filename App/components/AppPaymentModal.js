import { StyleSheet, Text, View } from "react-native";
import { StripeProvider } from "@stripe/stripe-react-native";

const AppPaymentModal = () => {
  return (
    <StripeProvider publishableKey="pk_test_51PE7JJ2Ko5agVUkjc03WFbbyrT8eoq1j1hqFvIa45sZz5iQihu1N3z9N0TTRZeJM39onWhqmTGku95gz9RQ8gCoU00sNp9NESl"></StripeProvider>
  );
};

const styles = StyleSheet.create({});

export default AppPaymentModal;
