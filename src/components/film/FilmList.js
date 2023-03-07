import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";

export default function FilmList(props) {
  console.log(props.data);
  return (
    <View style={styles.list}>
      <FlatList
        data={props.data}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => {
              props.navigation.navigate("FilmDetails", { name: item.title });
            }}
          >
            <View className=" flex-row text-white items-center border-white border rounded-2xl my-3">
              <View className="my-3 mx-5 justify-center items-center rounded-full">
                <Image
                  height={80}
                  width={80}
                  className="rounded-full object-fill"
                  source={{
                    uri: `https://starwars-visualguide.com/assets/img/films/${
                      item.url.split("/").slice(-2, -1)[0]
                    }.jpg`,
                  }}
                />
              </View>
              <View className="w-1/2">
                <Text className=" font-semibold italic text-xl text-white">
                  {item.title}
                </Text>
              </View>
            </View>
          </Pressable>
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
