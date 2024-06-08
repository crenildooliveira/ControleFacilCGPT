import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Ingredient } from '../types';
import { MainTabsParamList } from '../navigation/MainTabs';
import { StackNavigationProp } from '@react-navigation/stack';

type IngredientsScreenNavigationProp = StackNavigationProp<MainTabsParamList, 'Ingredientes'>;
type IngredientsScreenRouteProp = RouteProp<MainTabsParamList, 'Ingredientes'>;

const IngredientsScreen: React.FC = () => {
  const navigation = useNavigation<IngredientsScreenNavigationProp>();
  const route = useRoute<IngredientsScreenRouteProp>();
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);

  React.useEffect(() => {
    if (route.params?.newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, route.params.newIngredient!]);
    }
  }, [route.params?.newIngredient]);

  const handleAddIngredient = () => {
    navigation.navigate('AddIngredient');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleAddIngredient} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <FlatList
        data={ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.ingredient}>
            <Text>{item.name}</Text>
            <Text>{item.quantity} {item.unit}</Text>
            <Text>R${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  ingredient: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default IngredientsScreen;
