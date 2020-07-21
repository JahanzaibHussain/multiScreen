import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native'

import axios from 'axios'


import { styles }  from '../assets/globalStyle'

function Post( {route} ) {

    const url = "https://jsonplaceholder.typicode.com/posts/" + route.params.id;

    const [post, setPost] = useState(null);

    useEffect( ()=>{
        //fetch( url )
        axios.get(url)
            .then( res => {
                setPost(res.data)
            })
            .catch( err => {
                console.log("err.data")
                console.log(err)
            } )
    }, [])

    return (
        (post != null) ? ( 
            <View style={styles.container}>
                <Text style={styles.text}> {post.title} </Text>
                <Text style={styles.text}> {post.body} </Text>
            </View>
        ) : (
            <View style={styles.container} >
                <ActivityIndicator size="large" color="#00ff00" />
                <Text style={styles.item}>Loading</Text>
            </View>
        )
       
    )
}

export default Post
