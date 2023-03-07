import { View, Text, Image } from "react-native";
import { useAtom } from "jotai";

import { randomIdAtom } from "../atoms/randomId";
import MyButton from "../components/MyButton";
import RandomCharacterInfo from "../components/character/RandomCharacterInfo";
import getRandom from "../functions/getRandom";

export default function RandomScreen({ navigation }) {
  const [randomId, setRandomId] = useAtom(randomIdAtom);

  const onPressHandler = () => {
    let randomNum = getRandom(1, 84, 17);

    setRandomId(randomNum);
  };
  console.log(randomId);

  return (
    <View className="flex-1 items-center text-center bg-neutral-700">
      <MyButton onPress={onPressHandler}>
        <Text className="text-white text-lg font-semibold">
          Press to get a Star-Wars character
        </Text>
      </MyButton>

      {randomId !== 0 && (
        <Text className="font-bold text-2xl text-white ">
          Your character today:
        </Text>
      )}

      {randomId !== 0 && <RandomCharacterInfo randomNumber={randomId} />}
    </View>
  );
}
