import { Image, KeyboardAvoidingView, Pressable, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import { Text } from 'react-native-paper'
import CustomInputWithIcon from '../components/CustomInputWithIcon'
import { IconComponentCheck, IconComponentSquareBox } from '../utils/IconComponents'
import Colors from '../utils/colors'
import CustomGradientButton from '../components/CustomGradientButton '
import { useNavigation } from '@react-navigation/native'

const ContactDetailsScreen = () => {
    const navigation = useNavigation();
    const [agreeCheck, setAgreeCheck] = useState(false);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        postalCode: '',
        city: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        postalCode: '',
        city: '',
    });


    const validate = () => {
        let newErrors = {};

        if (!form.firstName) newErrors.firstName = 'First name is required';
        if (!form.lastName) newErrors.lastName = 'Last name is required';

        if (!form.email) {
            newErrors.email = 'Email is required';
        } else if (!form.email.includes('@')) {
            newErrors.email = 'Invalid email';
        }

        if (!form.phone) {
            newErrors.phone = 'Phone is required';
        } else if (form.phone.length < 10) {
            newErrors.phone = 'Invalid phone number';
        }

        if (!form.address) newErrors.address = 'Address is required';
        if (!form.postalCode) newErrors.postalCode = 'Postal code required';
        if (!form.city) newErrors.city = 'City is required';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    const handleChange = (key, value) => {
        setForm(prev => ({
            ...prev,
            [key]: value,
        }));
        setErrors(prev => ({
            ...prev,
            [key]: '',
        }));
    };

    const onClickSendBtn = () => {
        try {
            const isValid = validate();
            if (!isValid) {
                return;
            }
            navigation.replace('CheckOutScreen');
        } catch (error) {

        }
    }

    return (
        <KeyboardAvoidingView
            behavior='padding'
        >
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={{ padding: 10, gap: 10 }}>
                        <Image source={require('../assets/image/logo.png')} style={{ alignSelf: 'center' }} />
                        <Text variant='titleLarge' style={{ textAlign: 'center', fontWeight: 'bold', }}>Please provide your contact details to receive the tax receipt.</Text>
                        <CustomInputWithIcon placeholder={'First Name *'} icon='user' onChangeText={(text) => handleChange('firstName', text)} error={errors.firstName} />
                        <CustomInputWithIcon placeholder={'Last Name *'} icon='user' onChangeText={(text) => handleChange('lastName', text)} error={errors.lastName} />
                        <CustomInputWithIcon placeholder={'E-mail*'} icon='envelope' onChangeText={(text) => handleChange('email', text)} error={errors.email} iconSize={20}/>
                        <CustomInputWithIcon placeholder={'06xxxxxxxx *'} icon='mobile' keyboardType='numeric' onChangeText={(text) => handleChange('phone', text)} error={errors.phone} iconSize={32} />
                        <CustomInputWithIcon placeholder={'Address *'} icon='home' onChangeText={(text) => handleChange('address', text)} error={errors.address} />
                        <CustomInputWithIcon placeholder={'Postal Code *'} icon='map-pin' onChangeText={(text) => handleChange('postalCode', text)} error={errors.postalCode} />
                        <CustomInputWithIcon placeholder={'City *'} icon='map-marker' onChangeText={(text) => handleChange('city', text)} error={errors.city} />

                        <Pressable hitSlop={40} onPress={() => setAgreeCheck(!agreeCheck)} style={{ flexDirection: 'row',}}>
                            {agreeCheck ? <IconComponentCheck color={Colors.iconColor} /> : <IconComponentSquareBox color={Colors.iconColor} />}
                            <Text variant='titleMedium'> I agree to be contacted to receive a tax receipt.</Text>
                        </Pressable>
                        
                        <CustomGradientButton variant={'titleLarge'} onPress={onClickSendBtn} title={'SEND IT!'} linearBtnStyle={{ flexDirection: 'row', alignItems: 'center', gap: 6, borderRadius: 24 }} colors={[Colors.primary, Colors.primary, Colors.primary]} icon={'arrow-right'} iconColor={'#fff'} textStyle={{ fontWeight: 'bold' }} />
                        <CustomGradientButton variant={'titleLarge'} onPress={()=>navigation.replace('CheckOutScreen')} title={'NO RECEIPT'} colors={["#ff0000", "#ff0000", "#ff0000"]} linearBtnStyle={{ borderRadius: 24 }} textStyle={{ fontWeight: 'bold' }} />


                    </View>
                </ScrollView>
            </View>


        </KeyboardAvoidingView>
    )
}

export default ContactDetailsScreen