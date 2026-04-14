import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Animated, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [loading, setLoading] = useState(false);

    const scaleAnim = useRef(new Animated.Value(1)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current;

    const handleDiscover = () => {
        setLoading(true);

        Animated.parallel([
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.08,
                    duration: 250,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 250,
                    useNativeDriver: true,
                }),
            ]),
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 900,
                useNativeDriver: true,
            }),
        ]).start(() => {
            rotateAnim.setValue(0);
            setLoading(false);
            navigation.navigate('Result');
        });
    };

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <Animated.Image
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/235/235861.png',
                }}
                style={[
                    styles.illustration,
                    {
                        transform: [{ scale: scaleAnim }, { rotate: spin }],
                    },
                ]}
            />

            <Text style={styles.title}>SIMFlag</Text>
            <Text style={styles.subtitle}>
                Descubra a bandeira do país associado à rede do dispositivo
            </Text>

            <Pressable
                style={[styles.button, loading && styles.buttonDisabled]}
                onPress={handleDiscover}
                disabled={loading}
            >
                <Text style={styles.buttonText}>
                    {loading ? 'Descobrindo...' : 'Descobrir bandeira'}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eef4ff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    illustration: {
        width: 170,
        height: 170,
        marginBottom: 28,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d3557',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 15,
        color: '#4f5d75',
        textAlign: 'center',
        maxWidth: 300,
        marginBottom: 28,
    },
    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 14,
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
});