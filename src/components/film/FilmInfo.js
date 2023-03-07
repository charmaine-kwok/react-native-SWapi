import { useSearchCharacter } from "../../api/Hooks";
import { Text, View } from "react-native";

import FilmDetails from "../film/FilmDetails";
import { useAtom } from "jotai";

import { useSearchFilm } from "../../api/Hooks";

export default function FilmInfo(props) {
  const { data, isFetching, isLoading } = useSearchFilm(props.name);
  console.log("data");
  console.log(data);
  if (isFetching || isLoading) {
    console.log("isFetching");
    return (
      <Text className="font-bold text-xl text-white italic">Loading...</Text>
    );
  }
  console.log("Data:", data.results);

  return (
    <View className="flex-1 my-2.5 min-h-full flex-row">
      <FilmDetails data={data.results} />
    </View>
  );
}
