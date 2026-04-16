import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Animated,
  Easing,
} from "react-native";

export default function ResultScreen({ navigation, route }) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const country = route?.params?.country || {
    success: false,
    isoCode: "BR",
    countryName: "Brasil",
    flag: "🇧🇷",
    message: "País não identificado.",
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 300,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 300,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [rotateAnim]);

  const tilt = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["-1.5deg", "1.5deg"],
  });

  const flagUrl = `https://flagcdn.com/w320/${country.isoCode.toLowerCase()}.png`;

  return (
    <View style={styles.container}>
      <View style={styles.blurShapeLeft} />
      <View style={styles.blurShapeRight} />

      <View style={styles.card}>
        <Text style={styles.title}>Bandeira identificada!</Text>

        <Animated.View
          style={[
            styles.flagFrame,
            {
              transform: [{ rotate: tilt }],
            },
          ]}
        >
          <Image
            source={{ uri: flagUrl }}
            style={styles.flag}
            resizeMode="cover"
          />
        </Animated.View>

        <Text style={styles.countryName}>{country.countryName}</Text>

        <Text style={styles.countryCode}>Código: {country.isoCode}</Text>

        <Text style={styles.message}>{country.message}</Text>

        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Compartilhar</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.secondaryButtonText}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFF4F8",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  blurShapeLeft: {
    position: "absolute",
    top: 110,
    left: -45,
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: "#C7ECF4",
    opacity: 0.8,
  },
  blurShapeRight: {
    position: "absolute",
    bottom: 80,
    right: -35,
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: "#B9E57F",
    opacity: 0.4,
  },
  card: {
    width: "100%",
    maxWidth: 390,
    backgroundColor: "#FFFDF7",
    borderRadius: 32,
    paddingHorizontal: 28,
    paddingVertical: 34,
    alignItems: "center",
    shadowColor: "#7CB9C7",
    shadowOpacity: 0.16,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "800",
    color: "#356B7A",
    textAlign: "center",
    marginBottom: 30,
  },
  flagFrame: {
    width: "100%",
    backgroundColor: "#F5FCFD",
    borderRadius: 24,
    padding: 14,
    borderWidth: 2,
    borderColor: "#C9ECF3",
    marginBottom: 22,
  },
  flag: {
    width: "100%",
    height: 180,
    borderRadius: 18,
  },
  countryName: {
    fontSize: 26,
    fontWeight: "800",
    color: "#356B7A",
    marginBottom: 8,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "600",
    color: "#5F8792",
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    color: "#6B7E85",
    textAlign: "center",
    marginBottom: 25,
  },
  primaryButton: {
    width: "100%",
    backgroundColor: "#3BB6E6",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#34A9D6",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.2,
  },
  secondaryButton: {
    width: "100%",
    backgroundColor: "#EAF8DC",
    paddingVertical: 15,
    borderRadius: 18,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#5D7A2A",
    fontSize: 15,
    fontWeight: "700",
  },
});
