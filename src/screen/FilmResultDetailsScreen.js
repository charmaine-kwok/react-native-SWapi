import { View } from "react-native";

import FilmInfo from "../components/film/FilmInfo";

export default function FilmesultDetailsScreen({ navigation, route }) {
  return (
    <View className="flex-1 items-center bg-neutral-700">
      <FilmInfo name={route.params.name} />
    </View>
  );
}
