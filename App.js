import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";

import MyStack from "./src/screen/MyStack";

const queryClient = new QueryClient();
import { StyleSheet } from "react-native";

import Header from "./src/components/Header";

export default function App() {
  return (
    <>
      <Header title="Star-Wars API" />
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <MyStack />
        </QueryClientProvider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(64,64,64)",
    textAlign: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
  },
  button: {
    marginVertical: 15,
    backgroundColor: "lightblue",
    borderColor: "lightblue",
  },
});
