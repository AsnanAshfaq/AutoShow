import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import carBrand from '../utils/carBrandsList'

export default function Car_Brands () {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Car Brands</Text>
            </View>
            <ScrollView>
                <>
                    {carBrand.map(car => {
                        return (
                            <View key={car.id}>
                                <View style={styles.imageContainer}>
                                    <Image source={{ uri: car.img_url }} style={styles.image} />
                                </View>
                                <View style={styles.detailsContainer}>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{car.name}</Text>
                                </View>
                            </View>
                        )
                    }
                    )}
                </>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 25
    },
    imageContainer: {
        flex: 0.3,
        margin: 10
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        borderWidth: 1
    },
    headerText: {
        fontSize: 30,
        color: 'black'
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    detailsContainer: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
