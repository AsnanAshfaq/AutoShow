import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CarDetailsCard from '../components/CarDetailsCard'

const CarDetails = ({ route }) => {
    const { car } = route.params;
    return (
        <View>
            <CarDetailsCard car={car} />
        </View>
    )
}

export default CarDetails

const styles = StyleSheet.create({})
