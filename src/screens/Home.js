import { View } from "react-native";
import Header from "../components/Header";
import Stories from "../components/Stories";
import pinguim from '../assets/pinguim.jpg';
import Post from "../components/Post";
import postImage from "../assets/pinguim.jpg"

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <Header />
      <Stories />
      <Post
        profileImage={pinguim}
        postImage={postImage}
        profileName="Pinguim"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida rhoncus libero. Pellentesque laoreet vehicula feugiat. Pellentesque semper leo metus, quis dictum sem iaculis sed. Fusce in felis pharetra lectus viverra consectetur vitae at ligula. Fusce pellentesque lacus eget diam."
      />
    </View>
  );
}