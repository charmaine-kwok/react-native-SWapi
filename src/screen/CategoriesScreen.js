import { View } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { useAtom } from "jotai";

import { categoryAtom } from "../atoms/category";
import CategoryItem from "../components/CategoryItem";

export default function CategoriesScreen({ navigation }) {
  const [category, setCategory] = useAtom(categoryAtom);

  const data = [
    {
      name: "CHARACTERS",
      pic: require("../../assets/categories/character.jpg"),
      link: () => {
        setCategory("characters");
        navigation.navigate("Search", {
          title: "Character",
          placeholder: "Luke Skywalker",
        });
      },
    },
    {
      name: "FILMS",
      pic: require("../../assets/categories/films.jpg"),
      link: () => {
        setCategory("films");
        navigation.navigate("Search", {
          title: "Film",
          placeholder: "A New Hope",
        });
      },
    },
    {
      name: "SPECIES",
      pic: require("../../assets/categories/species.jpg"),
      link: () => {
        setCategory("species");
        navigation.navigate("Search", {
          title: "Species",
          placeholder: "Human",
        });
      },
    },
    {
      name: "STARSHIPS",
      pic: require("../../assets/categories/starships.jpg"),
      link: () => {
        setCategory("starships");
        navigation.navigate("Search", {
          title: "Starship",
          placeholder: "Alderaan",
        });
      },
    },
    {
      name: "VEHICLES",
      pic: require("../../assets/categories/vehicles.jpg"),
    },
    {
      name: "PLANETS",
      pic: require("../../assets/categories/planets.jpg"),
      link: () => {
        setCategory("planets");
        navigation.navigate("Search", {
          title: "Planet",
          placeholder: "Alderaan",
        });
      },
    },
  ];

  return (
    <View className="flex-1 bg-neutral-700">
      <FlatGrid
        itemDimension={150}
        data={data}
        className="mt-5 flex-1"
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <CategoryItem item={item} link={item.link} />
        )}
      />
    </View>
  );
}
