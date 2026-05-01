import { } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Text } from 'react-native-paper'
import Feather from '@expo/vector-icons/Feather';

const SuccessScreen = () => {
    const colors = ["#2B8AC9", "#0A4DB3", "#031A8A"]
    return (

        <LinearGradient
            colors={colors}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text variant='bodyLarge' style={{ color: '#fff' }}>BORNES DE DONS</Text>
            <Text variant='titleLarge' style={{ color: '#7ed957', fontWeight: 'bold', marginTop: 100, marginBottom: 50 }}> PAIEMENT RÉUSSI !</Text>
            <Feather name="check-circle" size={64} color="#7ed957" />
            <Text variant='titleLarge' style={{ lineHeight:36, textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 20, marginBottom: 50 , fontSize:32}}>Votre paiement a été confirmé avec succès</Text>
             <Text variant='titleLarge' style={{ lineHeight:36, textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 20, marginBottom: 50 , fontSize:48}}>MERCI</Text>
        </LinearGradient>

    )
}

export default SuccessScreen