import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import { firestore } from '../Firebase/firebase.js'
import * as firebase from 'firebase';
import CarCard from '../components/CarCard.js';


export default function HomeScreen ({ navigation }) {

  const [carList, setcarList] = useState([])
  const [Loading, setLoading] = useState(true)

  const handleDelete = (id) => {
    firestore.collection("cars")
      .doc(id)
      .delete()
      .then(() => {
        console.log('Deleting Car');
      });
  }

  useEffect(() => {
    const getData = async () => {
      try {
        firestore.collection("cars")
          .onSnapshot((snapshot) => {
            setcarList((prev) =>
              snapshot.docs.map((document) => {
                const car = document.data()
                car['id'] = document.id
                return car
              })
            )
            setLoading(false);
          });
      } catch (error) {
        alert(`Error is, ${error.message}`);
        setLoading(true);
      }
    }
    getData()
  }, [Loading])



  return (
    <View style={styles.container}>
      {/* header  */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Manage Cars</Text>
      </View>
      <View style={{ alignItems: 'flex-end', padding: 5, }}>
        <TouchableOpacity onPress={() => navigation.navigate('Add Car')}>
          <Text style={{ fontSize: 17 }}>Add Car</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <>
          {Loading && (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text>Loading...</Text>
            </View>
          )}
          {!Loading && carList.length > 0 && carList.map(car => {
            return (
              <View style={{ marginHorizontal: 15, marginVertical: 5, }} key={car.id}>
                <CarCard car={car} navigation={navigation} handleDelete={handleDelete} />
              </View>
            )
          }
          )}
        </>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 25
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 30,
    color: 'black'
  }
});
