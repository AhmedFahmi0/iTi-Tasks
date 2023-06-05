import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  // console.warn("ay 7agaaaa")
  // console.error("ay 7agaaaa")
// View ,Text, safeAreaView, ScrollView
  return (
   
    <ScrollView horizontal showsVerticalScrollIndicator={false} >
      <View>
      <Image style={{width:360,height:750}} source={{uri:"https://rare-gallery.com/uploads/posts/548490-nature-wallpaper.jpg",
    }}></Image>
     </View>

      <View >
      {/* <Text style={{backgroundColor:"red", fontSize:25}}>Helloo <Text onPress={()=>{alert("pressed")}}  style={{color:"white",fontSize:15}}>world</Text></Text> */}
     <Image style={{width:360,height:750}} source={{uri:"https://w.forfun.com/fetch/44/44b208e04a532e7077071d32baebf666.jpeg",
    }}></Image>
      </View>

      <View >
      {/* <Text style={{backgroundColor:"red", fontSize:25}}>Helloo <Text onPress={()=>{alert("pressed")}}  style={{color:"white",fontSize:15}}>world</Text></Text> */}
     <Image style={{width:360,height:750}} source={{uri:"https://w0.peakpx.com/wallpaper/960/845/HD-wallpaper-nature-landscape-landscape-nature-thumbnail.jpg",
    }}></Image>
      </View>
    </ScrollView>
   
  );
}
