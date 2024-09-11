import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Pressable component for showing modal */}
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>Show modal message</Text>
      </Pressable>

      {/* Modal component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // for Android back button
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>This is modal...</Text>
          
          {/* Pressable component to close the modal */}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.text}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonClose: {
    backgroundColor: '#F194FF',
  },
});
