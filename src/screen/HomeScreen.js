import { View, Text } from "react-native";
import { useAtom } from "jotai";

import { randomIdAtom } from "../atoms/randomId";
import MyButton from "../components/MyButton";
import GetRandomCharacter from "../api/GetRandomCharacter";
import getRandom from "../functions/getRandom";

export default function HomeScreen({ navigation }) {
  const [randomId, setRandomId] = useAtom(randomIdAtom);

  const onPressHandler = () => {
    let randomNum = getRandom(1, 84);
    if (randomNum === 17) {
      randomNum = getRandom(1, 84);
    }
    setRandomId(randomNum);
  };
  console.log(randomId);

  return (
    <View className="flex-1 items-center text-center bg-neutral-700">
      <MyButton onPress={onPressHandler}>
        <Text className="text-white text-lg font-semibold">
          Who's your character today?
        </Text>
      </MyButton>

      <Text className="font-bold text-2xl text-white ">
        Your character today:
      </Text>

      {randomId !== 0 && <GetRandomCharacter randomNumber={randomId} />}
      <MyButton
        onPress={() => {
          navigation.navigate("Search");
          setRandomId(0);
        }}
      >
        <Text className="text-white text-lg font-semibold">
          Search a Star Wars Character
        </Text>
      </MyButton>
    </View>
  );
}
