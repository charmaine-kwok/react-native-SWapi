import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { getSearchCharacter } from "../api/Hooks";
import { useAtom } from "jotai";
import { characterNameAtom } from "../atoms/characterName";

export default function From(props) {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
    },
  });
  //   const onSubmit = (data) => {
  //     console.log(data);
  //   };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Luke Skywalker"
          />
        )}
        name="Name"
        rules={{ required: true }}
      />

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color="white"
          title="Reset"
          onPress={() => {
            reset({
              Name: "",
            });
          }}
        />
      </View>

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color="white"
          title="Search"
          //   onPress={handleSubmit(getSearchCharacter)}
          onPress={handleSubmit((data) => {
            // getSearchCharacter();
            props.onSearch.navigate("SearchResult", { params: data });
          })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "white",
    marginBottom: 20,
    fontSize: 20,
    justifyContent: "flex-start",
    textAlign: "center",
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "black",
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    // paddingTop: Constants.statusBarHeight,
    padding: 18,
    minWidth: "80%",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  buttonInner: {
    color: "black",
    backgroundColor: "#ec5990",
  },
});
