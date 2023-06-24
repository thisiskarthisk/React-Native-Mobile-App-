import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home';
import Like from '../Pages/Like';
import Profile from '../Pages/Profile';
import Message from '../Pages/Message';

const Stack = createStackNavigator();

export function Navigation() { // Updated component name
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Like" component={Like} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Message" component={Message} />
    </Stack.Navigator>
  );
}
