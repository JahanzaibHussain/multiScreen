import React from 'react'
import {View, Text, Button} from 'react-native'

//importing global styles
import { styles }  from '../assets/globalStyle'


function Post( {navigation} ) {
     
    return (
        <View style={styles.container}>
            <Text style={styles.text} >Welcome Screen</Text>
            <Button 
                title=" Show all Posts"  
                onPress={ ()=>{
                    navigation.navigate("Posts", {name: "Posts"})
                    }
                }
            /> 
        </View>
    )
}

export default Post
