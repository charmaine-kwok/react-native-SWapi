import { View } from "react-native";
import { useSearchCharacter } from "../api/Hooks";
import CharacterDetails from "../components/CharacterDetails";

import CharacterInfo from "../components/CharacterInfo";

export default function ResultDetailScreen({ navigation, route }) {
  return (
    <View className="flex-1 items-center bg-neutral-700">
      <CharacterInfo name={route.params.name} />
      {/* <CharacterDetails data={data.result} /> */}
    </View>
  );
}
