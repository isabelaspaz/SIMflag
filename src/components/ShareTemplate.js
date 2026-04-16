import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ShareTemplate({ country }) {
    const flagUrl = `https://flagcdn.com/w320/${country.isoCode.toLowerCase()}.png`;

    return (
        <View style={styles.wrapper}>
            <View style={styles.blurShapeLeft} />
            <View style={styles.blurShapeRight} />

            <View style={styles.card}>
                <Text style={styles.title}>Bandeira identificada!</Text>

                <View style={styles.flagFrame}>
                    <Image
                        source={{ uri: flagUrl }}
                        style={styles.flag}
                        resizeMode="cover"
                    />
                </View>

                <Text style={styles.countryName}>{country.countryName}</Text>
                <Text style={styles.countryCode}>Código: {country.isoCode}</Text>
                <Text style={styles.message}>{country.message}</Text>

                <View style={styles.badge}>
                    <Text style={styles.badgeText}>Compartilhado via SIMflag</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: 420,
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
        textAlign: "center",
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
    badge: {
        backgroundColor: "#EAF8DC",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 999,
    },
    badgeText: {
        color: "#5D7A2A",
        fontSize: 13,
        fontWeight: "700",
    },
});