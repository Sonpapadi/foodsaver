import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Image, ScrollView } from "react-native";
import SendSMSComponent from "./components/SendSMSComponent";
import logo from "foodsaver/assets/foodsaver_logo.jpg";
import MapView from 'react-native-maps';
import { SocialMediaComponent } from "./components/SocialMediaComponent";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Food Savers Club</Text>
      <Image
        source={logo}
        style={{ width: 50, height: 50, margin: 25 }}
        resizeMode={"cover"} // cover or contain its upto you view look
      />
      <ScrollView>
        <Text style={styles.content}>Appreciating food not wasting it!!!</Text>
        <SendSMSComponent />
        <MapView style={styles.map} />
      </ScrollView>

      <SocialMediaComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4aa564",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    position: "relative",
    marginTop: 50,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Cochin"
  },
  content: {
    position: "relative",
    margin: 50,
    fontFamily: "Georgia",
  },
  map: {
    marginTop: 20,
    width: '100%',
    height: '100%',
  },
});
