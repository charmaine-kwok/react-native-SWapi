import { View } from "react-native";
import ResultList from "../components/ResultList";

export default function ResultListScreen({ navigation, route }) {
  const name = route.params.params.Name;

  return (
    <View className="flex-1 items-center bg-neutral-700">
      <ResultList name={name} navigation={navigation} />
    </View>
  );
}
