import { Image, TouchableOpacity } from 'react-native';
import DoctorProfileScreen from './app/screens/doctorProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="DoctorProfile" 
          component={DoctorProfileScreen}
          options={{
            title: "Doctor's Profile",
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'white', 
            },
            headerTintColor: '#333',
            headerTitleStyle: {
              color: '#15AEB2'
            },
            headerLeft: () => (
              <TouchableOpacity 
                style={{ marginLeft: 10 }}
                onPress={() => {
                  // handle back action, e.g., navigation.goBack()
                }}
              >
                <Image source={require('./assets/back.png')}/>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity 
                style={{ marginRight: 10 }}
                onPress={() => {
                  // handle options menu here
                }}
              >
                <Image source={require('./assets/menuoptions.png')}/>
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
