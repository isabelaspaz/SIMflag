import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function ResultScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bandeira encontrada</Text>

            <Image
                source={{ uri: 'https://flagcdn.com/w320/br.png' }}
                style={styles.flag}
            />

            <Text style={styles.countryName}>Brasil</Text>
            <Text style={styles.countryCode}>Código: BR</Text>

            <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1d3557',
        marginBottom: 24,
    },
    flag: {
        width: 240,
        height: 160,
        borderRadius: 14,
        marginBottom: 20,
    },
    countryName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1f2937',
        marginBottom: 8,
    },
    countryCode: {
        fontSize: 15,
        color: '#6b7280',
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 14,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
});