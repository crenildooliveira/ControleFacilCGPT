import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Ingredient } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabsParamList } from '../navigation/MainTabs';

type AddIngredientScreenNavigationProp = StackNavigationProp<MainTabsParamList, 'AddIngredient'>;

const AddIngredientScreen: React.FC = () => {
  const navigation = useNavigation<AddIngredientScreenNavigationProp>();
  const [name, setName] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [unit, setUnit] = useState<string>('KG');
  const [price, setPrice] = useState<string>('');

  const addIngredient = () => {
    if (name && quantity && unit && price) {
      const newIngredient: Ingredient = { name, quantity, unit, price };
      navigation.navigate('Ingredientes', { newIngredient });
      setName('');
      setQuantity('');
      setUnit('KG');
      setPrice('');
    } else {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do ingrediente"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={unit}
        onValueChange={(itemValue) => setUnit(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="KG" value="KG" />
        <Picker.Item label="G" value="G" />
        <Picker.Item label="L" value="L" />
        <Picker.Item label="ML" value="ML" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={addIngredient} style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 8,
  },
  addButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default AddIngredientScreen;
