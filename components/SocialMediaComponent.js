import React from "react";
import { Text, View } from "react-native";
// Import to show social icons
import { SocialIcon } from "react-native-elements";
import { Linking } from "react-native";

export const SocialMediaComponent = () => {
  const handleOpenLink = async (url) => {
    try {
      await Linking.openURL(url);
    } catch {
      throw new Error("URI cant open:" + url);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <SocialIcon
            //Social Icon using react-native-elements
            type="instagram"
            //Type of Social Icon
            onPress={() => {
              //Action to perform onPress of the Icon
              handleOpenLink("https://www.instagram.com/foodsaversclub/");
            }}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <SocialIcon
            type="youtube"
            onPress={() => {
              alert("youtube");
            }}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <SocialIcon
            type="facebook"
            onPress={() => {
              alert("facebook");
            }}
          />
        </View>
      </View>
    </View>
  );
};
