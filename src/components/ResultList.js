import { useSearchCharacter, useSearchFilm } from "../api/Hooks";
import { Text, StyleSheet } from "react-native";
import { useAtom } from "jotai";

import CharacterList from "./character/CharacterList";
import FilmList from "./film/FilmList";
import { categoryAtom } from "../atoms/category";

export default function ResultList(props) {
  console.log("props.name");
  console.log(props.name);

  const [category, setCategory] = useAtom(categoryAtom);
  console.log(category);

  switch (category) {
    case "films":
      console.log("this is a film.");
      ({ data, isFetching, isLoading } = useSearchFilm(props.name));

    case "characters":
      console.log("this is a character.");
      ({ data, isFetching, isLoading } = useSearchCharacter(props.name));
  }

  if (isFetching || isLoading) {
    console.log("isFetching");
    return (
      <Text className="font-bold text-xl text-white italic">Loading...</Text>
    );
  }
  // console.log("Data:", data.results);
  switch (category) {
    case "films":
      console.log("this is a film.");
      return <FilmList data={data.results} navigation={props.navigation} />;

    case "characters":
      return (
        <CharacterList data={data.results} navigation={props.navigation} />
      );
  }
}
