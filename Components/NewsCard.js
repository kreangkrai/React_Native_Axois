import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions,Button, Alert } from 'react-native'
import { color } from 'react-native-reanimated'
import {Divider} from 'react-native-elements'
const { width, height } = Dimensions.get('window')

const NewsCard = ({ item }) => {
   // console.log(item)
    return (
        <View style={styles.cardView}>
            <Text style={styles.title}> {item.device}</Text>
            <Divider orientation='horizontal' width={2} color='greenyellow'/>
            <Text style={styles.author}>{item.date} </Text>
            <Divider orientation='horizontal' width={2} color='greenyellow'/>
            {/*<Image style={styles.image} source={item.urlToImage ? { uri: item.urlToImage } : null} />*/}
            <Text style={styles.description}>{item.value}</Text>
            {/* <Image style={styles.image} source= {require('../assets/icon.png')}></Image>*/}
            <Button color='#234433'  title={item._id} onPress={()=> Alert.alert(item._id)}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex:1,
        flexDirection:'column',
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
   
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.05,
        color: 'grey',
        alignItems:'center',
        justifyContent:'center',
        fontSize: 30,
    },
    image: {
        height: height / 6,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02,
    },
    author: {
        marginBottom: 0,
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.05,
        color: 'grey',
        fontSize: 15,
    }

})



export default NewsCard