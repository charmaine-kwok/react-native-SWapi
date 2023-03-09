import { View, StyleSheet, FlatList, Text, Image } from "react-native";

export default function SpeciesDetails(props) {
  console.log("props");
  console.log(props);
  return (
    <View className="flex-1 my-2.5 min-h-full flex-row">
      <FlatList
        data={[props.item]}
        renderItem={({ item, index }) => (
          <View className="mb-11">
            <Text className="my-2 text-center font-semibold italic text-2xl text-white">
              {item.name}
            </Text>
            <View className="my-3 justify-center items-center">
              <Image
                className="object-cover mb-2.5"
                height={300}
                width={200}
                source={{
                  uri: `https://starwars-visualguide.com/assets/img/species/${
                    item.url.split("/").slice(-2, -1)[0]
                  }.jpg`,
                }}
              />
            </View>
            <View>
              <Text style={styles.desc}>Name: {item.name} </Text>
              <Text style={styles.desc}>
                Classification: {item.classification}{" "}
              </Text>
              <Text style={styles.desc}>Designation: {item.designation} </Text>
              <Text style={styles.desc}>
                Average Height: {item.average_height}
              </Text>
              <Text style={styles.desc}>Skin Color: {item.skin_colors}</Text>
              <Text style={styles.desc}>
                Average Lifespan: {item.average_lifespan}{" "}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  desc: {
    color: "white",
    textAlign: "left",
    marginLeft: 60,
    fontSize: 18,
  },
});
