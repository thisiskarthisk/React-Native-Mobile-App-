// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import LOGIN from './src/views/Pages/Login';
// import Navigate from './src/views/components/Navigate';

// export default function App() {
//   return (
//        <>
//        <StatusBar/>
//         <Navigate/>
//         <LOGIN/>
//       </>
//   );
// }

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LOGIN from './src/views/Pages/Login';
// import { Navigation } from './src/views/components/Navigation'; // Updated import statement

export default function App() {
  return (
    <>
      <StatusBar/>
      {/* <Navigation/> Updated component usage */}
      <LOGIN/>
    </>
  );
}
