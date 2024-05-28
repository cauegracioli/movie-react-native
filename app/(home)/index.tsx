import {
  getAllMovies,
  getMostPopular,
  getTopRatedMovies,
} from "@/services/api/get-movies";
import { useSuspenseQueries } from "@tanstack/react-query";
import { SafeAreaView, ScrollView } from "react-native";
import { MoviesList } from "./components/movies-list";
import { Suspense } from "react";

export default function HomeScreen() {
  const [{ data: movies }, { data: topRated }, { data: popular }] =
    useSuspenseQueries({
      queries: [
        {
          queryKey: ["movies"],
          queryFn: getAllMovies,
        },
        {
          queryKey: ["top-rated"],
          queryFn: getTopRatedMovies,
        },
        {
          queryKey: ["popular"],
          queryFn: getMostPopular,
        },
      ],
    });

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Suspense fallback={<>...isLoading</>}>
          <MoviesList data={movies} banner='Now playing' />
          <MoviesList data={topRated} banner='Top rated' />
          <MoviesList data={popular} banner='Populars' />
        </Suspense>
      </ScrollView>
    </SafeAreaView>
  );
}
