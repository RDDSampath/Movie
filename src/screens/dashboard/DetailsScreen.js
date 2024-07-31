import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
    const { details } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{details.title}</Text>
            <Image 
                source={{ uri: 'https://image.tmdb.org/t/p/w500' + details.poster_path }} 
                style={styles.image}
            />
            
            <Text style={styles.releaseDate}>Release Date: {details.release_date}</Text>
            <Text style={styles.overview}>{details.overview}</Text>
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
        height: 500,
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
    overview: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default DetailsScreen;
