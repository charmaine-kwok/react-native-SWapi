import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import ResultListScreen from "./ResultListScreen";
import ResultDetailScreen from "./ResultDetailsScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Character" component={ResultListScreen} />
      <Stack.Screen name="Details" component={ResultDetailScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
