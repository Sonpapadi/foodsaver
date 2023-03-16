import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import SendSMSComponent from "./components/SendSMSComponent";
import { EventsAccordian } from "./components/EventsAccordian";
import logo from "./assets/logo.jpg";
import MapView from "react-native-maps";
import { SocialMediaComponent } from "./components/SocialMediaComponent";
import { NativeBaseProvider, theme } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Food Savers Club</Text>
        <Image
          source={logo}
          style={{ width: 100, height: 100, margin: 25 }}
          resizeMode={"cover"} // cover or contain its upto you view look
        />
        <ScrollView>
          <Text style={styles.content}>
          Our goal is to maximize food waste prevention strategies so that food waste will be reduced in our community in 2019 and beyond. We started this to spears awarness throughout our community on the disadvantages of food waste. We believe that this knowledge can positively impact the environment and people around the world.
          </Text>
          <SendSMSComponent />
          {/* <EventsAccordian /> */}
          <MapView style={styles.map} />
        </ScrollView>

        <SocialMediaComponent />
        <Text>©2023 Food Smart</Text>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    position: "relative",
    marginTop: 50,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Cochin",
  },
  content: {
    position: "relative",
    margin: 20,
    fontFamily: "Georgia",
  },
  map: {
    marginTop: 20,
    width: "100%",
    height: "100%",
  },
});
