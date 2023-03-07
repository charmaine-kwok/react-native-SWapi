import { useCharacterById } from "../../api/Hooks";
import { Text, View } from "react-native";
import CharacterDetails from "./CharacterDetails";

export default function RandomCharacterInfo(props) {
  const { data, isFetching, isLoading } = useCharacterById(props.randomNumber);

  if (isFetching || isLoading) {
    return (
      <Text className="font-bold text-xl text-white italic">Loading...</Text>
    );
  }

  console.log("data", data);

  return (
    <View className="my-2 flex-row">
      <CharacterDetails data={[data]} />
    </View>
  );
}
