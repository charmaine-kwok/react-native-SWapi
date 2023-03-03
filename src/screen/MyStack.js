import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import SearchResultScreen from "./SearchResultScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="SearchResult" component={SearchResultScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
