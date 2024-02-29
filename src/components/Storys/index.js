import { View, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Story from "../Story";

export default function Storys(){

    return(
        <ScrollView contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}>
          <Story Image={arara_vermelha.jpg}/>
          <Story Image={mona_lisa.jpg}/>
          <Story Image={panda_bicicleta.jpg}/>
          <Story Image={pinguim.jpg}/>
        </ScrollView>
    );
}