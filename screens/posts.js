import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native'

import axios from 'axios'

import { styles }  from '../assets/globalStyle'

function Posts( {navigation} ) {

    const url = "https://jsonplaceholder.typicode.com/posts";
    const [posts, setPosts] = useState(null);

    useEffect( ()=>{
        //fetch( url )
        axios.get(url)
            .then( res => {
                // console.log("resdata")
                // console.log(res.data)
                setPosts(res.data)
            })
            .catch( err => {
                console.log("err.data")
                console.log(err.data)
            } )
    }, [])
    
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={ ()=> navigation.navigate("Post",{ id: item.id.toString() }) }  >
                <View style={styles.list} > 
                    <Text style={styles.item} > {item.title} </Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        (posts != null) ? ( 
            <FlatList 
                data={posts}
                renderItem={renderItem}
                keyExtractor={ (item) => item.id.toString()}
            />
        ) : (
            <View style={styles.container} >
                <ActivityIndicator size="large" color="#00ff00" />
                <Text style={styles.item}>Loading</Text>
            </View>
        )
    )
}

export default Posts
