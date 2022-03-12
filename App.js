/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  ScrollView,
  StatusBar,
  Text,
  View,
  Button,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import Counter from './Components/Counter';
import store from './Components/Redux/Store';
import Users from './Components/Users';
console.log('store', store);
// const Section = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [currentScreen, setCurrentScreen] = useState('counter');

  return (
    <SafeAreaView style={backgroundStyle}>
      <Provider store={store}>
        <Button
          title={`Switch to ${
            currentScreen === 'counter' ? 'Users Screen' : 'Counter Screen'
          }`}
          onPress={() => {
            setCurrentScreen(currentScreen === 'counter' ? 'users' : 'counter');
          }}
        />
        <Text />
        {currentScreen === 'counter' ? <Counter /> : <Users />}
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
