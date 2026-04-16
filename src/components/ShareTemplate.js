import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ShareTemplate({ country }) {
    const flagUrl = country?.isoCode
        ? `https://flagcdn.com/w320/${country.isoCode.toLowerCase()}.png`
        : null;

    return (
        <View style={styles.wrapper}>
            <View style={styles.blurShapeLeft} />
            <View style={styles.blurShapeRight} />

            <View style={styles.card}>
                <Text style={styles.title}>
                    {country?.success
                        ? "Bandeira identificada!"
                        : "Nenhum país identificado"}
                </Text>

                <View style={styles.flagFrame}>
                    {flagUrl ? (
                        <Image
                            source={{ uri: flagUrl }}
                            style={styles.flag}
                            resizeMode="cover"
                        />
                    ) : (
                        <View style={styles.emptyFlagContainer}>
                            <Text style={styles.emptyFlagIcon}>{country?.flag || "🚫"}</Text>
                            <Text style={styles.emptyFlagText}>Sem chip identificado</Text>
                        </View>
                    )}
                </View>



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
    emptyFlagContainer: {
        width: "100%",
        height: 180,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EDF7F9",
    },
    emptyFlagIcon: {
        fontSize: 56,
        marginBottom: 10,
    },
    emptyFlagText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#6B7E85",
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
