import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTv } from '../../store/tvReducer';

const Tv = ({ navigation }) => {
    const tv = useSelector((state) => state.tv.data?.results || []);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTv());
    }, [dispatch]);

    const TvItem = ({ item }) => (
        <TouchableOpacity
            style={styles.tvItem}
            onPress={() => navigation.navigate('DetailsScreen', { details: item })}
        >
            <ImageBackground
                source={{ uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path }}
                resizeMode="cover"
                style={styles.imagePlaceholder}
            >
                <Text style={styles.tvTitle}>{item.name}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );

    return (
        <View>
            <Text style={styles.header}>TV Shows</Text>
            <FlatList
                data={tv}
                renderItem={({ item }) => <TvItem item={item} />}
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
    tvItem: {
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
    tvTitle: {
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

export default Tv;
