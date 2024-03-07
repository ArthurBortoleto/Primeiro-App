import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Fake1 from "../../assets/arara_vermelha.jpg";
import Story from "../Story";

export default function Stories() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Story image={Fake1} />
      <Story image={Fake1} />
      <Story image={Fake1} />
      <Story image={Fake1} />
      <Story image={Fake1} />
      <Story image={Fake1} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    height: 100,
  },
});
