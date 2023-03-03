import { View } from "react-native";
import CharacterInfo from "../components/CharacterInfo";

export default function ResultDetailScreen({ navigation, route }) {
  const name = route.params.name;
  console.log("Name:", name);
  navigation.setOptions({
    title: name,
  });
  return (
    <View className="flex-1 items-center bg-neutral-700">
      <CharacterInfo name={name} />
    </View>
  );
}
