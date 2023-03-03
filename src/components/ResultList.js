import { useSearchCharacter } from "../api/Hooks";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";

export default function ResultList(props) {
  const { data, isFetching, isLoading } = useSearchCharacter(props.name);

  if (isFetching || isLoading) {
    console.log("isFetching");
    return (
      <Text className="font-bold text-xl text-white italic">Loading...</Text>
    );
  }
  console.log("Data:", data.results);

  return (
    <View style={styles.list}>
      <FlatList
        data={data.results}
        renderItem={({ item, index }) => (
          <View className=" flex-row text-white items-center border-white border rounded-2xl my-3">
            <View className="my-3 mx-5 justify-center items-center rounded-full">
              <Image
                height={80}
                width={80}
                className="rounded-full object-fill"
                source={{
                  uri: `https://starwars-visualguide.com/assets/img/characters/${
                    item.url.split("/").slice(-2, -1)[0]
                  }.jpg`,
                }}
              />
            </View>
            <View className="w-1/2">
              <Text className=" font-semibold italic text-xl text-white">
                {item.name}
              </Text>
            </View>
            <View className=" ">
              <Pressable
                onPress={() => {
                  props.navigation.navigate("Details", { name: item.name });
                }}
              >
                <Text className="  underline italic text-lg text-white">
                  {">"}Details
                </Text>
              </Pressable>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginVertical: 10,
    marginHorizontal: 15,
    minHeight: 100,
    flexDirection: "row",
  },
});
