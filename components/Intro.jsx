import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Animated,
} from "react-native";
import introImage from "../assets/White Playful Pet Shop Logo.png";

const Intro = ({ navigation }) => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigation]);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["#E0F7FA", "#B2EBF2"],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.background, { backgroundColor }]}>
        <View style={styles.content}>
          <Image source={introImage} style={styles.image} />
          <Text style={styles.title}>Welcome to Pet Shop</Text>
          <Text style={styles.description}>
            Discover a world of adorable companions, premium pet supplies, and
            expert care tips for your furry friends.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace("Login")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pawPrints}>
          {[...Array(3)].map((_, index) => (
            <Text key={index} style={styles.pawPrint}>
              🐾
            </Text>
          ))}
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#4A4A4A",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#6B6B6B",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#FF9D00",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  pawPrints: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  pawPrint: {
    fontSize: 24,
    marginHorizontal: 5,
  },
});
