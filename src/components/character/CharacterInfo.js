import { useSearchCharacter } from "../../api/Hooks";
import { Text, View } from "react-native";
import CharacterDetails from "./CharacterDetails";

export default function CharacterInfo(props) {
  const { data, isFetching, isLoading } = useSearchCharacter(props.name);

  if (isFetching || isLoading) {
    console.log("isFetching");
    return (
      <Text className="font-bold text-xl text-white italic">Loading...</Text>
    );
  }
  console.log("Data:", data.results);

  return (
    <View className="flex-1 my-2.5 min-h-full flex-row">
      <CharacterDetails data={data.results} />
    </View>
  );
}
