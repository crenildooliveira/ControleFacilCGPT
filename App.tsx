import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabs from './src/navigation/MainTabs';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
};

export default App;
