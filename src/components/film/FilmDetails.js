import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import ViewMoreText from "react-native-view-more-text";
// import SeeMore from "react-native-see-more-inline";
// var createReactClass = require("create-react-class");
// import ReadMore from "@fawazahmed/react-native-read-more";
import ReadMore from "react-native-read-more-text";

// let Example = createReactClass({
//   renderViewMore(onPress) {
//     return (
//       <Text style={styles.desc} onPress={onPress}>
//         View more
//       </Text>
//     );
//   },
//   renderViewLess(onPress) {
//     return (
//       <Text style={styles.desc} onPress={onPress}>
//         View less
//       </Text>
//     );
//   },
//   render() {
//     return (
//       <ViewMoreText
//         numberOfLines={3}
//         renderViewMore={this.renderViewMore}
//         renderViewLess={this.renderViewLess}
//         textStyle={styles.desc}
//       >
//         {/* <Text>
//           Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie
//           constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum
//           cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
//         </Text> */}
//         <Text>Opening Crawl: {this.props.text}</Text>
//       </ViewMoreText>
//     );
//   },
// });

export default function FilmDetails(props) {
  console.log("in film details component");
  console.log(props.data);
  return (
    <FlatList
      data={props.data}
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

            {/* <Example text={item.opening_crawl} /> */}
            {/* <ReadMore
              numberOfLines={5}
              style={styles.desc}
              seeMoreStyle={{ color: "gold", marginLeft: 0 }}
              seeLessStyle={{ color: "gold" }}
            >
              {`Opening Crawl: \n${item.opening_crawl}`}
            </ReadMore> */}
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
          {/* <ViewMoreText
            numberOfLines={3}
            renderViewMore={this.renderViewMore}
            renderViewLess={this.renderViewLess}
            textStyle={{ textAlign: "center" }}
            style={styles.desc}
          >
            Opening Crawl: {item.opening_crawl}{" "}
          </ViewMoreText> */}
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
