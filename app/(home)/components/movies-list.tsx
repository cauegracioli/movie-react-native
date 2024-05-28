import { FlatList, View, VirtualizedList } from "react-native";
import { BannerHeader } from "./banner-header";
import { ImageView } from "./image-view";
import { styles } from "../styles";
import { IMovies, Results } from "../types/movies";

interface MovieListProps {
  data?: IMovies;
  banner: string;
}

type Item = Pick<Results, "id" | "poster_path" | "vote_average">;

export function MoviesList({ data, banner }: MovieListProps) {
  return (
    <View style={styles.container}>
      <BannerHeader title={banner} />
      <VirtualizedList
        initialNumToRender={4}
        horizontal={true}
        data={data?.results}
        keyExtractor={(item) => item.id}
        getItemCount={(data) => data.length}
        getItem={(data, index) => data[index]}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: { item: Item }) => <ImageView item={item} />}
      />
    </View>
  );
}
