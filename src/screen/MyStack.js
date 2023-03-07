import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import ResultListScreen from "./ResultListScreen";
import CharacterResultDetailScreen from "./CharacterResultDetailsScreen";
import FilmResultDetailsScreen from "./FilmResultDetailsScreen";
import TestScreen from "./TestScreen";
import CategoriesScreen from "./CategoriesScreen";
import RandomScreen from "./RandomScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Test">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Random" component={RandomScreen} />
      <Stack.Screen
        name="Character"
        component={ResultListScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen name="Test" component={TestScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterResultDetailScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="FilmDetails"
        component={FilmResultDetailsScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
