import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Modal, TouchableHighlight } from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://203.129.243.94:8086/api/mqtt-service',
          {
            method: 'POST',
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDlkZWQ3NTlmN2RkZjU3OTgzZDVmNiIsImlhdCI6MTY4NjgzMDg3NywiZXhwIjoxNjg2OTE3Mjc3fQ.XhfY2lqBOm_UuNWhoNxeGE6cxTWNhEiDU_kI2ruMdww',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              op: 'get_device',
              unit_num: 'U-1',
            }),
          },
        );

        const result = await response.json();
        setData(result.message);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleItemClick(item)}
    >
      <View>
        <Text style={styles.text}>Device ID: {item.device_id}</Text>
        <Text style={styles.text}>Element Num: {item.element_num}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.listContainer}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectedItem && (
              <View>
                <Text style={styles.text}>ID: {selectedItem._id}</Text>
                <Text style={styles.text}>Device ID: {selectedItem.device_id}</Text>
                <Text style={styles.text}>Element Num: {selectedItem.element_num}</Text>
                <Text style={styles.text}>Gateway type: {selectedItem.gateway_type}</Text>
                <Text style={styles.text}>Type: {selectedItem.type}</Text>
                <Text style={styles.text}>Unit Number: {selectedItem.unit_num}</Text>
              </View>
            )}
            <TouchableHighlight
              style={styles.closeButton}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  item: {
    backgroundColor: 'grey',
    padding: 10,
    marginVertical: 10,
    borderRadius: 14,
  },
  text: {
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 14,
    width: '80%',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'grey',
    borderRadius: 14,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
