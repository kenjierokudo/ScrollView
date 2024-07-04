import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
const data = [
  { id: '1', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '2', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '3', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '4', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '5', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '6', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '7', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '8', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '9', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '10', title: 'Maou sama', price: 'Rp 200.000', imageUrl:'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '11', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '12', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '13', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '14', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '15', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '16', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '17', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '18', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '19', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '20', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
  { id: '21', title: 'Maou sama', price: 'Rp 200.000', imageUrl: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.largeHeaderContainer}>
        <Image source={{ uri: 'https://foto.kontan.co.id/yTa53i71T7R7QYoHxuI0y9-iZAY=/smart/2022/09/27/2140269735p.jpg' }} style={styles.largeHeaderImage} />
        <Text style={styles.largeHeaderText}>Anos Valdigoad</Text>
      </View>
      
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  largeHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  largeHeaderImage: {
    width: 50, 
    height: 50, 
    marginRight: 20,
  },
  largeHeaderText: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    textAlign: 'center',
  },
});

