import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    Platform,
    ScrollView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [count, setCount] = useState(0);
    const [greeting, setGreeting] = useState('歡迎使用 React Native！');

    const handlePress = () => {
        setCount(count + 1);
        if (Platform.OS === 'web') {
            window.alert('太棒了！您的 React Native APP 正在順利運行中！');
        } else {
            Alert.alert('太棒了！', '您的 React Native APP 正在順利運行中！');
        }
    };

    const greetings = [
        '哈囉，開發者！👋',
        '環境建置成功！🎉',
        'React Native 真好玩！🚀',
        '繼續加油！💪',
        '你是最棒的！⭐',
    ];

    const changeGreeting = () => {
        const randomIndex = Math.floor(Math.random() * greetings.length);
        setGreeting(greetings[randomIndex]);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <StatusBar style="light" />

                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerEmoji}>⚛️</Text>
                    <Text style={styles.title}>React Native Sample App</Text>
                    <Text style={styles.subtitle}>Android 開發環境已就緒</Text>
                </View>

                {/* Greeting Card */}
                <View style={styles.card}>
                    <Text style={styles.greetingText}>{greeting}</Text>
                    <TouchableOpacity style={styles.secondaryButton} onPress={changeGreeting}>
                        <Text style={styles.secondaryButtonText}>🔄 換一句招呼語</Text>
                    </TouchableOpacity>
                </View>

                {/* Counter Section */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>互動功能測試</Text>
                    <Text style={styles.counterText}>按鈕點擊次數</Text>
                    <Text style={styles.counterNumber}>{count}</Text>
                    <TouchableOpacity style={styles.primaryButton} onPress={handlePress}>
                        <Text style={styles.primaryButtonText}>👆 點擊我測試</Text>
                    </TouchableOpacity>
                </View>

                {/* Info Section */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>📋 環境資訊</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>平台：</Text>
                        <Text style={styles.infoValue}>{Platform.OS}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>框架：</Text>
                        <Text style={styles.infoValue}>React Native + Expo</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>狀態：</Text>
                        <Text style={[styles.infoValue, { color: '#4CAF50' }]}>✅ 運行中</Text>
                    </View>
                </View>

                {/* Footer */}
                <Text style={styles.footer}>
                    編輯 App.js 來修改此頁面{'\n'}儲存後畫面會自動更新 (Hot Reload)
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#0f0f23',
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    headerEmoji: {
        fontSize: 64,
        marginBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#61dafb',
        marginTop: 8,
    },
    card: {
        backgroundColor: '#1a1a3e',
        borderRadius: 16,
        padding: 24,
        width: '100%',
        maxWidth: 400,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#2a2a5e',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 16,
    },
    greetingText: {
        fontSize: 22,
        color: '#f0e68c',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: '600',
    },
    counterText: {
        fontSize: 14,
        color: '#aaaacc',
        marginBottom: 8,
    },
    counterNumber: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#61dafb',
        marginBottom: 16,
    },
    primaryButton: {
        backgroundColor: '#61dafb',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 12,
        width: '100%',
        alignItems: 'center',
    },
    primaryButtonText: {
        color: '#0f0f23',
        fontSize: 16,
        fontWeight: 'bold',
    },
    secondaryButton: {
        backgroundColor: '#2a2a5e',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#61dafb',
    },
    secondaryButtonText: {
        color: '#61dafb',
        fontSize: 14,
        fontWeight: '600',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#2a2a5e',
    },
    infoLabel: {
        fontSize: 14,
        color: '#aaaacc',
    },
    infoValue: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: '600',
    },
    footer: {
        marginTop: 20,
        fontSize: 13,
        color: '#666688',
        textAlign: 'center',
        lineHeight: 20,
    },
});
