import { View, Text, Image } from "react-native";
import { useAtom } from "jotai";
import { useLayoutEffect } from "react";

import { randomIdAtom } from "../atoms/randomId";
import MyButton from "../components/MyButton";
import getRandom from "../functions/getRandom";

export default function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null,
    });
  });
  const [randomId, setRandomId] = useAtom(randomIdAtom);

  const onPressHandler = () => {
    let randomNum = getRandom(1, 84, 17);

    setRandomId(randomNum);
  };
  console.log(randomId);

  return (
    <View className="flex-1 items-center text-center bg-neutral-700">
      {/* <MyButton onPress={onPressHandler}>
        <Text className="text-white text-lg font-semibold">
          Who's your character today?
        </Text>
      </MyButton>

      <Text className="font-bold text-2xl text-white ">
        Your character today:
      </Text>

      {randomId !== 0 && <RandomCharacterInfo randomNumber={randomId} />} */}
      {/* <MyButton
        onPress={() => {
          navigation.navigate("Search", {
            title: "Character",
            placeholder: "Luke Skywalker",
          });
          setRandomId(0);
        }}
      >
        <Text className="text-white text-lg font-semibold">
          Search a Star Wars Character
        </Text>
      </MyButton> */}

      {/* Test to random page*/}
      <MyButton
        onPress={() => {
          navigation.navigate("Random", {
            title: "Character",
            placeholder: "Luke Skywalker",
          });
          setRandomId(0);
        }}
      >
        <Text className="text-white text-lg font-semibold">
          Who's your character today?
        </Text>
      </MyButton>

      {/* Test */}
      <MyButton
        onPress={() => {
          navigation.navigate("Categories");
          setRandomId(0);
        }}
      >
        <Text className="text-white text-lg font-semibold">
          Search Star Wars
        </Text>
      </MyButton>
    </View>
  );
}
