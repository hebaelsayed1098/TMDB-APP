import { Text, View, Image } from "react-native";
import { styles } from "../styles/MovieStyle";
const Movie = (props) => {
  let date = props.date.split("-");

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: `https://image.tmdb.org/t/p/w500//${props.poster}`,
          }}
        />
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyle}>{props.title}</Text>

          <Text style={styles.dateStyle}>
            Date{" : "} {date[2]} {date[1]} {date[0]}
          </Text>
          <Text style={styles.overviewStyle}>{props.overview}</Text>
        </View>
      </View>
    </View>
  );
};

export default Movie;
