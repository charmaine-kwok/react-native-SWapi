import {
  useSearchCharacter,
  useSearchFilm,
  useSearchSpecies,
} from "../api/Hooks";
import { Text, Alert } from "react-native";
import { useAtom } from "jotai";

import CharacterList from "./character/CharacterList";
import FilmList from "./film/FilmList";
import SpeciesList from "./species/SpeciesList";
import { categoryAtom } from "../atoms/category";

export default function ResultList(props) {
  console.log("props.name");
  console.log(props.name);

  const [category, setCategory] = useAtom(categoryAtom);

  switch (category) {
    case "films":
      console.log("this is a film.");
      ({ data, isFetching, isLoading } = useSearchFilm(props.name));
      break;

    case "characters":
      console.log("this is a character.");
      ({ data, isFetching, isLoading } = useSearchCharacter(props.name));
      break;
    case "species":
      console.log("this is a species.");
      ({ data, isFetching, isLoading } = useSearchSpecies(props.name));
      break;
  }

  if (isFetching || isLoading) {
    console.log("isFetching");
    return (
      <Text className="font-bold text-xl text-white italic">Loading...</Text>
    );
  }
  const createTwoButtonAlert = () =>
    Alert.alert("Error", "Please enter a valid name.", [
      { text: "OK", onPress: () => props.navigation.goBack(), style: "cancel" },
    ]);
  if (data.results.length === 0) {
    return createTwoButtonAlert();
  }

  console.log("Data:", data.results);
  console.log("Data:", data.results.length);
  switch (category) {
    case "films":
      console.log("this is a film.");
      return <FilmList data={data.results} navigation={props.navigation} />;

    case "characters":
      return (
        <CharacterList data={data.results} navigation={props.navigation} />
      );

    case "species":
      return <SpeciesList data={data.results} navigation={props.navigation} />;
  }
}
