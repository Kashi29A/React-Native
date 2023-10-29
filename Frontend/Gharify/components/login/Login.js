import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './LoginStyles';
import { useTranslation } from 'react-i18next';

const Login = () => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder={t('placeholder.username')} />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <Button title="Login" onPress={() => {/* Add login logic here */ }} />
        </View>
    );
};

export default Login;