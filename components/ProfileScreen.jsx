import React from "react";
import { Button, Text } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <>
      <Button
        title="Back to home"
        onPress={() => navigation.navigate("Home")}
      />
      <Text>This is 's profile adasdsadasd a dasdsad sa sad asd </Text>
    </>
  );
};

export default ProfileScreen;
