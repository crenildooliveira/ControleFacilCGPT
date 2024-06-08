import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IngredientsScreen from '../components/IngredientsScreen';
import AddIngredientScreen from '../components/AddIngredientScreen';
import { Ingredient } from '../types';

export type MainTabsParamList = {
  Ingredientes: { newIngredient?: Ingredient };
  AddIngredient: undefined;
};

const Tab = createMaterialTopTabNavigator<MainTabsParamList>();

const MainTabs: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ingredientes" component={IngredientsScreen} />
      <Tab.Screen name="AddIngredient" component={AddIngredientScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;
