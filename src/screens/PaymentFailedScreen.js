import { ImageBackground, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import CustomGradientButton from '../components/CustomGradientButton '
import Colors from '../utils/colors'

const PaymentFailedScreen = () => {
    return (
        <ImageBackground source={require('../assets/image/failbg.png')} style={{ backgroundColor: '#fff', flex: 1, }} resizeMethod='resize' resizeMode='cover'>
            <Text style={{ color: '#fff', fontWeight: 'bold', marginTop: 20, marginHorizontal: 20, fontSize: 38 }}>Votre paiement n’a pas abouti. </Text>

            <View style={{ marginTop: 100, gap:20, padding:100 }}>
                <CustomGradientButton variant={'titleLarge'} title={'RETRY!'} linearBtnStyle={{ flexDirection: 'row', alignItems: 'center', gap: 6, borderRadius: 12, height:80}} colors={['#00ad17', '#00ad17', '#00ad17']} icon={'credit-card'}  textStyle={{ fontWeight: 'bold' }} />
                <CustomGradientButton variant={'titleLarge'} title={'BACK'} colors={["#db281f", "#db281f", "#db281f"]} linearBtnStyle={{ flexDirection: 'row', alignItems: 'center', gap: 6, borderRadius: 12, height:80,}} textStyle={{ fontWeight: '600' }}  icon={'ban'} />

            </View>
        </ImageBackground>
    )
}

export default PaymentFailedScreen