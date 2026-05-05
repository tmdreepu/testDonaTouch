import { View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import AmmountButton from '../components/AmmountButton'
import { IconComponentInfo } from '../utils/IconComponents'
import CustomGradientButton from '../components/CustomGradientButton '
import { requireNativeModule } from 'expo-modules-core';
import { useNavigation } from '@react-navigation/native'

const CheckOutScreen = () => {
    const navigation = useNavigation();
    const [selectedAmount, setSelectedAmount] = useState("€0.00")
    const ammount = ["€1.00", "€2.00", "€5.00", "€10.00", "€20.00", "€50.00", "Free Ammount", "No Thanks"]

    const MyNativeModule = requireNativeModule('NeptingModule');



    async function handleOpenApp() {
        try {
            const result = await MyNativeModule.openApp();
            if (result == "APP_OPENED") {
                const resultstartPayment = await MyNativeModule.startPayment("500", "order_1234234");
                navigation.navigate('SuccessScreen');
            }
        } catch (error) {
            // This will catch "Activity not found" or "Nepting app not installed"
            console.error("Failed to open app:", error.message);
            navigation.navigate('PaymentFailedScreen', { ammount: selectedAmount }); // Navigate to PaymentFailedScreen if the app is not installed
        }
    }


    // const pay = async () => {
    //     try {
    //         const res = await MyNativeModule.openNepting("100");

    //         console.log("jfljsl",res);

    //         if (res.status === "SUCCESS") {
    //             // success UI
    //         } else {
    //             // failed / cancelled
    //         }

    //     } catch (e) {
    //         console.log(e);
    //     }
    // };



    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#064166' }}>
            <View style={{ padding: 10, gap: 10, }}>
                <Text variant='titleLarge' style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>SELECT AN AMOUNT OR ENTER YOUR OWN</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginTop: 20 }}>
                    {
                        ammount.map((item, index) => {
                            let isSelected = item == selectedAmount;
                            return (
                                <AmmountButton key={index} text={item} onPress={() => setSelectedAmount(item)} isSelected={isSelected} />
                            )
                        })
                    }
                </View>
                <Text variant='titleLarge' style={{ color: '#fff', textDecorationLine: 'underline' }}>Tax Reduction</Text>
                <Text variant='titleLarge' style={{ color: '#fff', textTransform: 'uppercase' }}>Your donation will only cost you :</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                    <IconComponentInfo color={'#cc3333'} size={32} />
                    <Text variant='titleLarge' style={{ color: '#cc3333', fontWeight: 'bold', fontSize: 32 }}>{selectedAmount}</Text>
                </View>

                <Text variant='titleLarge' style={{ color: '#fff', textTransform: 'uppercase' }}>After tax reduction</Text>
                <CustomGradientButton variant={'titleLarge'} onPress={() => navigation.replace('ContactDetailsScreen')} title={'BACK'} colors={["#db281f", "#db281f", "#db281f"]} linearBtnStyle={{ borderRadius: 0 }} textStyle={{ fontWeight: '600' }} />
                <CustomGradientButton variant={'titleLarge'} onPress={handleOpenApp} title={'CONFIRM ORDER'} colors={["#9ac714", "#9ac714", "#9ac714"]} linearBtnStyle={{ borderRadius: 0, flexDirection: 'row', gap: 10 }} textStyle={{ fontWeight: '600' }} icon={'credit-card'} iconColor={'#fff'} iconSize={28} />
            </View>
        </ ScrollView>
    )
}

export default CheckOutScreen