import { ImageBackground, View } from 'react-native'
import React, { useState } from 'react'
import { Text } from 'react-native-paper'
import CustomGradientButton from '../components/CustomGradientButton '
import Colors from '../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { requireNativeModule } from 'expo-modules-core'

const PaymentFailedScreen = ({ route }) => {
    const navigation = useNavigation();
    const { ammount } = route.params;

    const MyNativeModule = requireNativeModule('NeptingModule');



    async function handleOpenApp() {
        try {
            const result = await MyNativeModule.openApp();
            console.log(result); // "APP_OPENED"
            if (result == "APP_OPENED") {
                const resultstartPayment = await MyNativeModule.startPayment(ammount, "order_1234234");
                console.log(resultstartPayment);
                navigation.replace('SuccessScreen');
            }
        } catch (error) {
            // This will catch "Activity not found" or "Nepting app not installed"
            console.error("Failed to open app:", error.message);
            navigation.navigate('PaymentFailedScreen', { ammount: ammount }); // Navigate to PaymentFailedScreen if the app is not installed
        }
    }

    return (
        <ImageBackground source={require('../assets/image/failbg.png')} style={{ backgroundColor: '#fff', flex: 1, }} resizeMethod='resize' resizeMode='cover'>
            <Text style={{ color: '#fff', fontWeight: 'bold', marginTop: 20, marginHorizontal: 20, fontSize: 38 }}>Votre paiement n’a pas abouti. </Text>

            <View style={{ marginTop: 100, gap: 20, padding: 100 }}>
                <CustomGradientButton onPress={handleOpenApp} variant={'titleLarge'} title={'RETRY!'} linearBtnStyle={{ flexDirection: 'row', alignItems: 'center', gap: 6, borderRadius: 12, height: 80 }} colors={['#00ad17', '#00ad17', '#00ad17']} icon={'credit-card'} textStyle={{ fontWeight: 'bold' }} />
                <CustomGradientButton onPress={() => navigation.goBack()} variant={'titleLarge'} title={'BACK'} colors={["#db281f", "#db281f", "#db281f"]} linearBtnStyle={{ flexDirection: 'row', alignItems: 'center', gap: 6, borderRadius: 12, height: 80, }} textStyle={{ fontWeight: '600' }} icon={'ban'} />
                <CustomGradientButton onPress={() => navigation.replace('SuccessScreen')} variant={'titleLarge'} title={'Test success screen'} colors={["#db281f", "#db281f", "#db281f"]} linearBtnStyle={{ flexDirection: 'row', alignItems: 'center', gap: 6, borderRadius: 12, height: 80, }} textStyle={{ fontWeight: '600' }} icon={'ban'} />
            </View>
        </ImageBackground>
    )
}

export default PaymentFailedScreen