import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import arara_vermelha from '../../assets/arara_vermelha.jpg';
import { View, Image, StyleSheet, TouchableOpacity} from "react-native";

export default function MyPost(){
    return(
        <View style={styles.container}>
            <View style={styles.icones}>
            <MaterialIcons name="grid-on" size={24} color="black" />
            <MaterialCommunityIcons name="movie-open-play-outline" size={24} color="black" />
            <MaterialCommunityIcons name="account-outline" size={24} color="black" />
            </View>
        <View style={styles.imagens}>
            <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor: "#000"}} source={arara_vermelha}/>
            <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor: "#000"}} source={arara_vermelha}/>
            <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor: "#000"}} source={arara_vermelha}/>
            <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor: "#000"}} source={arara_vermelha}/>
            <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor: "#000"}} source={arara_vermelha}/>
            <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor: "#000"}} source={arara_vermelha}/>
            <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor: "#000"}} source={arara_vermelha}/>
            <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor: "#000"}} source={arara_vermelha}/>
            <Image style={{width: "33.3%", height: 200, borderWidth:1, borderColor: "#000"}} source={arara_vermelha}/>
        </View>
        </View>

    )
}

const styles = StyleSheet.create({
    icones: {
        flexDirection: 'row',
        marginTop: 15,
        marginHorizontal:25,
        justifyContent: 'space-around',
        marginBottom: 15
    },
    imagens:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2
    }
})