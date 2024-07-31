import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';


const DetailsScreen = ({ route }) => {
    const { details, title } = route.params;


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image 
                source={{ uri: 'https://image.tmdb.org/t/p/w500' + details.poster_path }} 
                style={styles.image}
            />
            <Text style={styles.title}>{details.title}</Text>
            <Text style={styles.releaseDate}>Vote Avg {"Popularity"}</Text>
            <Text style={styles.overViewdetails}>Overview</Text>
            <Text style={styles.overview}>{details.overview}</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>
                    Discover
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginTop:50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },
    releaseDate: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    overViewdetails:{
        fontSize:20,
        color:'black',
        alignSelf:'flex-start',
        marginLeft:15,
        fontWeight:'600'
    },
    overview: {
        fontSize: 16,
        textAlign: 'justify',
        width:'90%',
        color:'black'
    },
    button:{
        backgroundColor:'#BB2D00',
        height:60,
        width:'80%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:40,
        borderRadius:10    },
        btnText:{
            color:'white',
            fontSize:18,

        }
});

export default DetailsScreen;
