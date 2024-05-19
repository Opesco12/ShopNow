import { createStackNavigator } from "@react-navigation/stack";

import WelcomeSceen from "../Screens/WelcomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import TabNavigator from "./TabNavigator";
import Cart from "../Screens/Cart";
import CategoryScreen from "../Screens/CategoryScreen";
import ProductDeatails from "../Screens/ProductDetails";
import ProductCategoryScreen from "../Screens/ProductCategoryScreen";
import EditScreen from "../Screens/EditScreen";
import CheckoutScreen from "../Screens/CheckoutScreen";

const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeSceen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Categories" component={CategoryScreen} />
      <Stack.Screen name="Product" component={ProductDeatails} />
      <Stack.Screen name="Category" component={ProductCategoryScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
