import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import arara_vermelha from "../assets/arara_vermelha.jpg";
import InfoProfile from '../components/InfoProfile';
import MyPosts from "../components/MyPosts";

export default function Profile() {
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

      <MyPosts />
    </View>
  );
}
