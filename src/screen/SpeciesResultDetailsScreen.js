import { View } from "react-native";

import SpeciesDetails from "../components/species/SpeciesDetails";

export default function SpeciesResultDetailsScreen({ navigation, route }) {
  console.log("name");
  console.log(route.params.item);
  return (
    <View className="flex-1 items-center bg-neutral-700">
      <SpeciesDetails item={route.params.item} />
    </View>
  );
}
