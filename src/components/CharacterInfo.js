import { useSearchCharacter } from "../api/Hooks";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

export default function CharacterInfo(props) {
  console.log("props.name");
  console.log(props.name);
  const { data, isFetching, isLoading } = useSearchCharacter(props.name);

  if (isFetching || isLoading) {
    console.log("isFetching");
    return (
      <Text className="font-bold text-xl text-white italic">Loading...</Text>
    );
  }
  console.log("Data:", data.results);
  const pic = data.results[0].url.split("/").slice(-2, -1)[0];

  return (
    <View style={styles.list}>
      <FlatList
        data={data.results}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <Text className="my-5 text-center font-semibold italic text-2xl text-white">
              {item.name}
            </Text>
            <View className="my-3 justify-center items-center">
              <Image
                height={200}
                width={200}
                source={{
                  uri: `https://starwars-visualguide.com/assets/img/characters/${
                    item.url.split("/").slice(-2, -1)[0]
                  }.jpg`,
                }}
              />
            </View>
            <Text style={styles.desc}>Gender: {item.gender} </Text>
            <Text style={styles.desc}>Height: {item.height} </Text>
            <Text style={styles.desc}>Birth Year: {item.birth_year} </Text>
            <Text style={styles.desc}>Eye Color: {item.eye_color} </Text>
            <Text style={styles.desc}>Hair Color: {item.hair_color} </Text>
            <Text style={styles.desc}>Skin Color: {item.skin_color} </Text>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { color: "white" },
  list: {
    marginVertical: 10,
    minHeight: 100,
    flexDirection: "row",
  },
  desc: {
    color: "white",
    textAlign: "left",
    marginLeft: 60,
    fontSize: 18,
  },
});
