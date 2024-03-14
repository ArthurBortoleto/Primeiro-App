import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { View, Image, StyleSheet, TouchableOpacity} from "react-native";
import arara_vermelha from '../../assets/arara_vermelha.jpg';

export default function MyPosts(){
    return(
        <View style={styles.container}>
            <View style={styles.icones}>
                <MaterialIcons name="grid-on" size={35} color="black"/>
                <MaterialCommunityIcons name="movie-open-play-outline" size={35} color="gray"/>
                <MaterialCommunityIcons name="account-outline" size={35} color="gray"/>
            </View>
            <View style={styles.imagens}>
                <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor:"#aaa"}} source={arara_vermelha}/>
                <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor:"#aaa"}} source={arara_vermelha}/>
                <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor:"#aaa"}} source={arara_vermelha}/>
                <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor:"#aaa"}} source={arara_vermelha}/>
                <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor:"#aaa"}} source={arara_vermelha}/>
                <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor:"#aaa"}} source={arara_vermelha}/>
                <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor:"#aaa"}} source={arara_vermelha}/>
                <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor:"#aaa"}} source={arara_vermelha}/>
                <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor:"#aaa"}} source={arara_vermelha}/>
            </View>
        </View>
    )
}