import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovie } from '../../store/movieReducer';

const Movie = ({ navigation }) => {
    const movie = useSelector((state) => state.movie.data?.results);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovie());
    }, [dispatch]);

    const MovieItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.movieItem} 
            onPress={() => navigation.navigate('DetailsScreen', { details: item, title: 'Movie' })}
        >
            <ImageBackground 
                source={{ uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path }} 
                resizeMode="cover" 
                style={styles.imagePlaceholder}
            >
                <Text style={styles.movieTitle}>{item.title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );

    return (
        <View>
            <Text style={styles.header}>Movies</Text>
            <FlatList
                data={movie}
                renderItem={({ item }) => <MovieItem item={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        justifyContent: 'center',
        padding: 10,
    },
    movieItem: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
    },
    imagePlaceholder: {
        width: 150,
        height: 200,
        justifyContent: 'flex-end', // To position the title at the bottom
        borderRadius: 10,
        overflow: 'hidden',
    },
    movieTitle: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background for better text visibility
        color: 'white',
        padding: 5,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
});

export default Movie;
