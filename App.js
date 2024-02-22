import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Header from "./src/components/Header";

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
      <Header/>
      <ScrollView contentContainerStyle={{ gap:8 }}
      horizontal style={{ flexDirection: "row" }}
      showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
        <Image 
        style={{ width: 100, height: 100, borderRadius: 50 }}
        source={{
          uri: "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png"
        }}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
        style={{ width: 100, height: 100, borderRadius: 50}}
        source={{
          uri: "https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg"
        }}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
        style={{ width: 100, height: 100, borderRadius: 50 }}
        source={{
          uri: "https://www.ufmt.br/ocs/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
        }}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
        style={{ width: 100, height: 100, borderRadius: 50 }}
        source={{
          uri: "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"
        }}
        />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
