import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ShareTemplate from "../components/ShareTemplate";

export default function SharePreviewScreen({ route }) {
    const country = route?.params?.country || {
        success: false,
        isoCode: "BR",
        countryName: "Brasil",
        flag: "🇧🇷",
        message: "País não identificado.",
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.blurShapeLeft} />
            <View style={styles.blurShapeRight} />

            <View style={styles.previewArea}>
                <ShareTemplate country={country} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
    previewArea: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});