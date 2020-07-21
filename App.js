import React from 'react';

// importing screens
import Welcome from './screens/welcome'
import MultiPost from './screens/posts'
import SinglePost from './screens/post'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Welcome}
          options={ 
              {title: "Welcome"}
          }
        />
        <Stack.Screen 
          name="Posts"
          component={MultiPost}
          options={ {title: "All Posts"} }
        />
        <Stack.Screen 
          name="Post"
          component={SinglePost}
          options={ {title: "Post"} }
        />

      </Stack.Navigator>
      {/* <View style={styles.container}>
         <Text style={styles.text} >Fetch APi</Text>
      </View>  */}
    </NavigationContainer>
  );
};


export default App;
