import { View } from "react-native";
import Header from "./src/components/Header";
import Storys from "./src/components/Story";

export default function App() {
  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <Header />
      <Storys />
    </View>
  );
}