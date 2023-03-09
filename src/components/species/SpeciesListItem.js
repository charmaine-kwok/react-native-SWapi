import { Text, View, Image, Pressable } from "react-native";

export default function SpeciesListItem(props) {
  console.log("in list item");
  console.log(props.item);
  return (
    <Pressable
      onPress={() => {
        props.navigation.navigate("SpeciesDetails", {
          item: props.item,
        });
      }}
    >
      <View className=" flex-row text-white items-center border-white border rounded-2xl my-3">
        <View className="my-3 mx-5 justify-center items-center rounded-full">
          <Image
            height={80}
            width={80}
            className="rounded-full object-fill"
            source={{
              uri: `https://starwars-visualguide.com/assets/img/species/${
                props.item.url.split("/").slice(-2, -1)[0]
              }.jpg`,
            }}
          />
        </View>
        <View className="w-1/2">
          <Text className=" font-semibold italic text-xl text-white">
            {props.item.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
