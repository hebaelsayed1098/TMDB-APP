import React from "react";
import { Text, FlatList } from "react-native";
import Movie from "./Movie";
import { styles } from "../styles/MovieListStyle";
const MovieList = (props) => {
  return (
    <FlatList
      style={styles.container}
      data={props.movies}
      renderItem={(itemData) => {
        return (
          <Movie
            overview={itemData.item.overview}
            title={itemData.item.title}
            date={itemData.item.date}
            poster={itemData.item.poster}
          />
        );
      }}
      keyExtractor={(itemData, index) => `${itemData.id}${index}`}
      ListHeaderComponent={() => <Text style={styles.listHeader}>TMDB</Text>}
    />
  );
};

export default MovieList;
