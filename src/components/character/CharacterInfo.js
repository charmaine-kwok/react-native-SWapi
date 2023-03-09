import { Text, View } from "react-native";
import CharacterDetails from "./CharacterDetails";
import CharacterRelatedFilm from "./CharacterRelatedFilm";

export default function CharacterInfo(props) {
  return (
    <View>
      <View className="flex-2 my-2.5 min-h-fit flex-row ">
        <CharacterDetails data={[props.item]} />
      </View>
      <View className="flex-1 min-w-[80%] max-w-[80%]">
        <CharacterRelatedFilm
          films={props.item.films}
          navigate={props.navigate}
        />
      </View>
    </View>
  );
}
