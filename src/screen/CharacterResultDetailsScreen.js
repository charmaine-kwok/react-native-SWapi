import { View } from "react-native";

import CharacterInfo from "../components/character/CharacterInfo";

export default function CharacterResultDetailScreen({ navigation, route }) {
  return (
    <View className="flex-1 items-center bg-neutral-700">
      <CharacterInfo
        name={route.params.name}
        item={route.params.item}
        navigate={navigation}
      />
    </View>
  );
}
