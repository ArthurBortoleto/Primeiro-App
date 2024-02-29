import { View } from "react-native";
import arara_vermelha from "./src/assets/arara_vermelha.jpg";
import InfoProfile from './src/components/InfoProfile';

export default function App() {
  return (
    <View
      style={{
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <InfoProfile
      image={arara_vermelha}
      publi={250}
      followers={500}
      following={100}
      />
    </View>
  );
}
