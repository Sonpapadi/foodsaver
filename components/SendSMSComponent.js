import * as SMS from "expo-sms";
import { Button } from "native-base";
import { StyleSheet, Text, View, Image } from "react-native";

export default SendSMSComponent = () => {
  const isAvailable = SMS.isAvailableAsync();
  const sendSMS = () => {
    if (isAvailable) {
      const { result } = SMS.sendSMSAsync(
        ["7045912582", "8037166453", "7192296747", "7043188809", "7045022308"],
        "Hello Foodsaver volunteers, I would love to donate food available for pickup at the below location:"
      );
      return result;
    } else {
      console.log("there is not sms send");
    }
  };
  const sendSMSJoinUs = () => {
    if (isAvailable) {
      const { result } = SMS.sendSMSAsync(
        ["7045912582", "8037166453", "7192296747", "7043188809", "7045022308"],
        "Hi FoodSavers Team , I am interested in joining the team of volunteers"
      );
      return result;
    } else {
      console.log("there is not sms send");
    }
  };
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Button
        style={styles.action1}
        borderRadius='2xl'
        onPress={async () => {
          sendSMS();
        }}
        // leftIcon={Call}
      >Contact US</Button>
      <Button
        style={styles.action2}
        variant='outline'
        backgroundColor='tertiary.500'
        borderRadius='2xl'
        onPress={async () => {
          sendSMSJoinUs();
        }}
        // leftIcon={<VolunteerActivism/>}  
      >Join US</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  action1: {
    position: "relative",
  },
  action2: {
    position: "relative",
    marginLeft: 25,
  },
});
