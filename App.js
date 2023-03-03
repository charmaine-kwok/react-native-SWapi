import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";

import MyStack from "./src/screen/MyStack";

const queryClient = new QueryClient();

import Header from "./src/components/Header";

export default function App() {
  return (
    <>
      <Header title="Star-Wars API" />
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <MyStack />
        </QueryClientProvider>
        <StatusBar style="light" />
      </NavigationContainer>
    </>
  );
}
