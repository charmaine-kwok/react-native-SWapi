import { View, Text, Image, TouchableOpacity } from "react-native";
import { useLayoutEffect } from "react";

export default function TestScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View className="flex-1 bg-neutral-700 ">
      {/* First section */}
      <View className="flex-row items-center justify-start mx-5">
        <Image
          className="w-14 h-16 my-10 rounded-full"
          source={require("../../assets/yoda.jpeg")}
        />
        <Text className="mx-3 font-semibold text-3xl color-white">
          Star-Wars API
        </Text>
        <View>
          <Image
            className="w-28 h-32 px-4 object-fill"
            source={require("../../assets/star-wars-4.png")}
          />
        </View>
      </View>

      {/* Second section */}
      <View className=" items-center justify-start mx-5">
        <Text className="text-amber-300 text-[32px] ">
          This is the Star-Wars API
        </Text>
        <Text className="color-white text-[28px] my-3">
          May the <Text className="font-semibold">FORCE</Text> be with you
        </Text>

        <Text className="color-white text-base items-start">
          You can search anything about Star Wars here.
        </Text>
      </View>

      {/* Third section */}
      <View className="flex-1 justify-end items-center relative ">
        <Image
          className="w-full h-22"
          source={require("../../assets/600px-Dueling_lightsabers.svg.png")}
        />

        <View className="absolute bottom-72 w-24 h-24 border-l-2 border-r-2 border-t-4 border-white rounded-full items-center justify-center">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <View>
              <View className="w-20 h-20 items-center justify-center rounded-full bg-white">
                <Text className="text-semibold text-black text-[32px]">Go</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
