import { useCharacterById } from "./Hooks";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

export default function GetRandomCharacter(props) {
  const { data, isFetching, isLoading } = useCharacterById(props.randomNumber);

  if (isFetching || isLoading) {
    return (
      <Text className="font-bold text-xl text-white italic">Loading...</Text>
    );
  }

  console.log("data");
  console.log(data);
  const data1 = [data];

  return (
    <View style={styles.list}>
      <FlatList
        data={data1}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
            <View className="justify-center items-center my-3">
              <Image
                height={200}
                width={200}
                source={{
                  uri: `https://starwars-visualguide.com/assets/img/characters/${
                    data.url.split("/").slice(-2, -1)[0]
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
  title: {
    textAlign: "center",
    fontWeight: "500",
    fontStyle: "italic",
    fontSize: 30,
    marginVertical: 10,
    color: "white",
  },
  desc: {
    color: "white",
    textAlign: "left",
    marginLeft: 60,
    fontSize: 18,
  },
});
