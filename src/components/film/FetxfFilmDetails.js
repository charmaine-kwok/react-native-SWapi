import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import ReadMore from "react-native-read-more-text";

import { useSearchFilm } from "../../api/Hooks";

export default function FilmDetails(props) {
  console.log("in film details component");
  console.log(props.item);

  if (!props.item) {
    console.log("theres nothing");
    ({ data, isFetching, isLoading } = useSearchFilm(props.name));
    if (isFetching || isLoading) {
      console.log("isFetching");
      return (
        <Text className="font-bold text-xl text-white italic">Loading...</Text>
      );
    }
    console.log(data);
    console.log(data.results);
  }

  return (
    <FlatList
      data={data.results || [props.item]}
      renderItem={({ item, index }) => (
        <View className="mb-11">
          <Text className="my-2 text-center font-semibold italic text-2xl text-white">
            {item.title}
          </Text>
          <View className="my-3 justify-center items-center">
            <Image
              className="object-cover mb-2.5"
              height={300}
              width={200}
              source={{
                uri: `https://starwars-visualguide.com/assets/img/films/${
                  item.url.split("/").slice(-2, -1)[0]
                }.jpg`,
              }}
            />
          </View>
          <View>
            <Text style={styles.desc}>Director: {item.director} </Text>
            <Text style={styles.desc}>Release Date: {item.release_date} </Text>
            <Text style={styles.desc}>Producers: {item.producer} </Text>

            <View style={styles.desc}>
              <ReadMore
                numberOfLines={7}
                renderTruncatedFooter={this._renderTruncatedFooter}
                renderRevealedFooter={this._renderRevealedFooter}
              >
                <Text style={styles.desc} className="mx-5 italic">
                  {"\n"}Opening Crawl: {"\n"}
                  {"\n"}
                  {item.opening_crawl}
                </Text>
              </ReadMore>
            </View>
          </View>
        </View>
      )}
      keyExtractor={(item, index) => index}
    />
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

_renderTruncatedFooter = (handlePress) => {
  return (
    <Text
      style={{ color: "#60a5fa", marginTop: 5, fontWeight: 700 }}
      onPress={handlePress}
    >
      Read more
    </Text>
  );
};

_renderRevealedFooter = (handlePress) => {
  return (
    <Text
      style={{ color: "#60a5fa", marginTop: 5, fontWeight: 700 }}
      onPress={handlePress}
    >
      Show less
    </Text>
  );
};
