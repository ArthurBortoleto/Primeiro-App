import { View, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function Storys(){

    return(
        <ScrollView contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
          <Image 
          style={styles.story}
          source={{
            uri: "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png"
          }}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
          style={styles.story}
          source={{
            uri: "https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg"
          }}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
          style={styles.story}
          source={{
            uri: "https://www.ufmt.br/ocs/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
          }}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
          style={styles.story}
          source={{
            uri: "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"
          }}
          />
          </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        gap: 8,
        height: 100,
        flexDirection:"row"
    },
    story: {
        width: 100,
        height: 100,
        borderRadius: 50
    }
})