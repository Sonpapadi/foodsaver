import * as SMS from "expo-sms";
import { Button } from "react-native-elements";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default SendSMSComponent = () => {
  const isAvailable = SMS.isAvailableAsync();
  const sendSMS = () => {
    if (isAvailable) {
      const { result } = SMS.sendSMSAsync(
        ["7045912582"],
        "Message Food Saver Volunteer"
      );
      return result;
    } else {
      console.log("there is not sms send");
    }
  };
  const sendSMSJoinUs = () => {
    if (isAvailable) {
      const { result } = SMS.sendSMSAsync(
        ["7045912582"],
        "Interested in joining the team"
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
        title="Contact US"
        onPress={async () => {
          sendSMS();
        }}
      />
      <Button
        style={styles.action2}
        title="Join US"
        onPress={async () => {
          sendSMSJoinUs();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  action1: {
    position: "relative"
  },
  action2: {
    position: "relative",
    marginLeft: 25,
  },
});
