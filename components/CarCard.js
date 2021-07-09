import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const CarCard = ({ navigation, car, handleDelete }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Car Details', {
            car: car
        })}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: car.url }} style={styles.image} />
            </View>
            <View style={styles.detailsContainer}>
                <Text>Maker <Text style={styles.detailsText}> {car.maker}</Text></Text>
                <Text>Model <Text style={styles.detailsText}> {car.model}</Text></Text>
                <Text>Year Manufactured  <Text style={styles.detailsText}> {car.year}</Text></Text>
                <Text>Engine Power <Text style={styles.detailsText}>{car.power}</Text></Text>
                <Text>Color <Text style={styles.detailsText}>{car.color}</Text></Text>
                {/* delete button container */}
                <View style={styles.deleteButtonContainer}>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(car.id)}>
                        <Text style={styles.deleteButtonText}>Delete </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CarCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 10,
        // marginHorizontal: 10,
        elevation: 2,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row'
    },
    imageContainer: {
        flex: 0.3,
        margin: 10
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 10,
        borderWidth: 1
    },
    detailsContainer: {
        flex: 0.7
    },
    detailsText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    deleteButtonContainer: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    deleteButton: {
        width: 70,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 6,
    },
    deleteButtonText: {
        color: 'red',
        fontSize: 16,
    }
})
