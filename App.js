import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./components/Main";
import Item from "./components/Item";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Search products" }}
          animationEnabled={true}
        />
        <Stack.Screen
          name="Item"
          component={Item}
          options={{ title: "Product detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
