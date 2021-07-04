import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Button, FlatList,Alert } from 'react-native'
import NewsCard from '../Components/NewsCard'
import newAPI from '../apis/News'

const News = ({ navigation }) => {

    // const [news, setNews] = useState([])
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsFromAPI()
    }, [])

    // const newsResponse = async() =>{
    //     const response = await newAPI.get('top-headlines?country=us&apiKey=aa6a097fb9fb4509958fdabd1942e6d1')
    //     console.log(response.data)
    // }

    function getNewsFromAPI() {
        newAPI.get('gets')
            .then(async function (response) {
                setNews(response.data);
                //console.log(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    if (!news) {
        return null
    }
    return (
      
        <View style={{flex:1}}>
        <Text></Text> 
            <FlatList data={news}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <NewsCard item = {item}/>
                }}
            />
           
        </View>
    )
}

export default News