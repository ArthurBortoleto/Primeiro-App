import { View, Image, Text, StyleSheet } from "react-native";

export default function InfoProfile({
    image,
        publi,
        followers,
        following,
    }){
    return(
        <View style={styles.container}>
            <Image style={{width: 100, height: 100, borderRadius: 50}} source={image}/>
            <View style={{flexDirection:'row'}}>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontWeight:'bold'}}>{publi}</Text>
                    <Text>Publicações</Text>
                </View>
                <View style={{marginHorizontal:15, alignItems:'center'}}>
                    <Text style={{fontWeight:'bold'}}>{followers}</Text>
                    <Text>Seguidores</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontWeight:'bold'}}>{following}</Text>
                    <Text>Seguindo</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:20,
        alignItems:'center'
    },
})