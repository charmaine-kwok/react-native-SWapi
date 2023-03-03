import { View } from "react-native";
import CharacterInfo from "../components/CharacterInfo";

export default function SearchResultScreen({ navigation, route }) {
  const name = route.params.params.Name;
  console.log("Name:", name);

  return (
    <View className="flex-1 items-center bg-neutral-700">
      <CharacterInfo name={name} />
    </View>
  );
}
