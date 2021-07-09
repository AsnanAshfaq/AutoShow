import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const CarDetailsCard = ({ car }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: car.url }} style={styles.image} resizeMode="contain" />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={{ fontSize: 18 }}>Maker <Text style={styles.detailsText}> {car.maker}</Text></Text>
                <Text style={{ fontSize: 18 }}>Model <Text style={styles.detailsText}> {car.model}</Text></Text>
                <Text style={{ fontSize: 18 }}>Year Manufactured  <Text style={styles.detailsText}> {car.year}</Text></Text>
                <Text style={{ fontSize: 18 }}>Engine Power <Text style={styles.detailsText}>{car.power}</Text></Text>
                <Text style={{ fontSize: 18 }}>Color <Text style={styles.detailsText}>{car.color}</Text></Text>
            </View>
        </View>
    )
}

export default CarDetailsCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column'
    },
    imageContainer: {
        // margin: 10
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
        height: '75%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        borderWidth: 1
    },
    detailsContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    detailsText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})
