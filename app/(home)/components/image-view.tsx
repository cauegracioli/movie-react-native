import { View, Image, Text, Pressable } from "react-native";
import { styles } from "../styles";
import { Results } from "../types/movies";
import { Link } from "expo-router";

interface ImageViewProps {
  item: Pick<Results, "id" | "poster_path" | "vote_average">;
}

export function ImageView({ item }: ImageViewProps) {
  return (
    <Link
      href={{
        pathname: "/[id]",
        params: { id: item.id },
      }}
      asChild
    >
      <Pressable style={styles.view}>
        <Image
          alt={item.id}
          source={{
            uri: "https://image.tmdb.org/t/p/w500" + item.poster_path,
          }}
          style={styles.image}
        />
        <View style={styles.rate}>
          <Text style={styles.rateText}>
            RATE {item.vote_average.toFixed(1)}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}
