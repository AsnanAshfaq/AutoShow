import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { firestore  } from '../Firebase/firebase'

const AddCar = () => {
    const [photo, setphoto] = useState('')
    const [maker, setmaker] = useState('')
    const [model, setmodel] = useState('')
    const [year, setyear] = useState(0)
    const [power, setpower] = useState('')
    const [color, setcolor] = useState('')

    const AddCar = () => {
        firestore()
            .collection('cars')
            .add({
                color: color,
                url: photo,
                power: power,
                model: model,
                maker: maker,
                year: year
            })
            .then(() => {
                console.log('Car added!');
            })
            .catch(() => {
                console.log('Error')
            })
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setphoto}
                value={photo}
                placeholder="Enter Image URL"
            />
            <TextInput
                style={styles.input}
                onChangeText={setmaker}
                value={maker}
                placeholder="Enter Car Maker Name"
            />
            <TextInput
                style={styles.input}
                onChangeText={setmodel}
                value={model}
                placeholder="Enter Car Model"
            />
            <TextInput
                style={styles.input}
                onChangeText={setyear}
                value={year}
                placeholder="Enter Car Manufactured Year"
            />
            <TextInput
                style={styles.input}
                onChangeText={setpower}
                value={power}
                placeholder="Enter Car Engine Power"
            />
            <TextInput
                style={styles.input}
                onChangeText={setcolor}
                value={color}
                placeholder="Enter Car Color"
            />
            <View style={styles.addButtonContainer}>
                <TouchableOpacity onPress={() => AddCar()} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add Car</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddCar

const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 40,
        margin: 20,
        paddingHorizontal: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },
    addButtonContainer: {
        backgroundColor: 'black',
        marginHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    addButton: {
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 18,
        color: 'white'
    }
})
