import { View } from "react-native";

import FilmInfo from "../components/film/FilmInfo";
import FilmDetails from "../components/film/FilmDetails";

export default function FilmesultDetailsScreen({ navigation, route }) {
  if (!route.params.item) {
    console.log("needa fetch");
    return (
      <View className="flex-1 items-center bg-neutral-700">
        <FilmInfo name={route.params.name} />
      </View>
    );
  }
  console.log(route.params);

  return (
    <View className="flex-1 items-center bg-neutral-700">
      <FilmDetails item={[route.params.item]} name={route.params.name} />
    </View>
  );
}
