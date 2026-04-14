import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
} from 'react-native';

export default function HomeScreen({ navigation }) {
    const [loading, setLoading] = useState(false);

    const handleDiscover = () => {
        if (loading) return;

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            navigation.navigate('Result');
        }, 1200);
    };

    return (
        <View style={styles.container}>
            <View style={styles.backgroundCircleTop} />
            <View style={styles.backgroundCircleBottom} />

            <View style={styles.card}>
                <View style={styles.illustrationWrap}>
                    <Image
                        source={
                            loading
                                ? require('../../assets/planetagirando.gif')
                                : require('../../assets/printplanetagirando.png')
                        }
                        style={styles.illustrationGif}
                        resizeMode="contain"
                    />
                </View>

                <Text style={styles.eyebrow}>⭐ SIMflag ⭐</Text>

                <Text style={styles.title}>Descubra a bandeira do seu país!</Text>

                <Pressable
                    style={[styles.primaryButton, loading && styles.buttonDisabled]}
                    onPress={handleDiscover}
                    disabled={loading}
                >
                    <Text style={styles.primaryButtonText}>
                        {loading ? 'Verificando...' : 'Mostrar bandeira ♥'}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DFF4F8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    backgroundCircleTop: {
        position: 'absolute',
        top: 70,
        left: -30,
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: '#CBEFF6',
        opacity: 0.9,
    },
    backgroundCircleBottom: {
        position: 'absolute',
        bottom: 70,
        right: -40,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: '#BDE78B',
        opacity: 0.45,
    },
    card: {
        width: '100%',
        maxWidth: 390,
        backgroundColor: '#FFFDF7',
        borderRadius: 32,
        paddingHorizontal: 30,
        paddingVertical: 42,
        alignItems: 'center',
        shadowColor: '#7CB9C7',
        shadowOpacity: 0.16,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 10 },
        elevation: 6,
    },
    illustrationWrap: {
        width: 136,
        height: 136,
        borderRadius: 68,
        backgroundColor: '#F5FCFD',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
        borderWidth: 2,
        borderColor: '#C9ECF3',
        overflow: 'hidden',
    },

    illustrationGif: {
        width: 164,
        height: 164,
    },
    eyebrow: {
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 2,
        color: '#4F97A8',
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        lineHeight: 35,
        fontWeight: '800',
        color: '#356B7A',
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 15,
        lineHeight: 24,
        color: '#5F8792',
        textAlign: 'center',
        marginBottom: 30,
        maxWidth: 295,
    },
    primaryButton: {
        width: '100%',
        backgroundColor: '#3BB6E6',
        paddingVertical: 16,
        borderRadius: 18,
        alignItems: 'center',
        shadowColor: '#34A9D6',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 4,
        marginTop: 10,
    },
    buttonDisabled: {
        opacity: 0.85,
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '800',
        letterSpacing: 0.2,
    },
});