import {
  getMovieCast,
  getMovieFromId,
  getMovieRecomendations,
} from "@/services/api/get-movie-details";
import { useSuspenseQueries } from "@tanstack/react-query";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Suspense } from "react";

import { View as MotiView, SafeAreaView } from "moti";
import { ThemedText } from "@/components/ThemedText";
import { Octicons } from "@expo/vector-icons";
import { detailsStyle } from "./(home)/styles/details.styles";

export default function MovieDetails() {
  const { id } = useLocalSearchParams();

  const [
    { data: details, isLoading },
    { data: cast },
    { data: recomendations },
  ] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["details", id],
        queryFn: () => getMovieFromId(Number(id)),
        refetchOnWindowFocus: true,
      },
      { queryKey: ["cast", id], queryFn: () => getMovieCast(Number(id)) },
      {
        queryKey: ["recomendations", id],
        queryFn: () => getMovieRecomendations(Number(id)),
      },
    ],
  });

  if (isLoading) return <>Loading details content</>;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: 15 }}
    >
      <Image
        style={detailsStyle.backdrop}
        alt={String(id)}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${details.backdrop_path}`,
        }}
      />
      <LinearGradient
        style={{
          position: "absolute",
          height: 200,
          top: 0,
          right: 0,
          left: 0,
        }}
        colors={["transparent", "rgba(0,0,0,0.8)"]}
      />
      <View
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Image
          style={detailsStyle.poster}
          alt={String(id)}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${details.poster_path}`,
          }}
        />
        <View>
          <ThemedText
            type='defaultSemiBold'
            style={{ color: "gray", fontSize: 14, marginBottom: 10 }}
          >
            {String(new Date(details.release_date).getFullYear())}
          </ThemedText>
          <ThemedText
            type='title'
            style={{
              marginBottom: 10,
              width: Dimensions.get("screen").width - 200,
            }}
          >
            {details.title}
          </ThemedText>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              width: Dimensions.get("screen").width - 200,
            }}
          >
            <ThemedText
              type='defaultSemiBold'
              style={{ color: "gray", fontSize: 14 }}
            >
              {details.runtime} min
            </ThemedText>
            <Octicons name='dot-fill' color='gray' />
            <FlatList
              data={details.genres}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <ThemedText
                  type='defaultSemiBold'
                  style={{ color: "gray", fontSize: 14 }}
                >
                  {item.name}
                  {index + 1 === details.genres.length ? null : ","}
                </ThemedText>
              )}
            />
          </View>
        </View>
      </View>
      <View style={{ padding: 20, paddingTop: 0 }}>
        <ThemedText type='default'>{details.overview}</ThemedText>
      </View>
      <View style={{ padding: 20, paddingTop: 5 }}>
        <ThemedText
          type='defaultSemiBold'
          style={{ fontSize: 18, marginBottom: 10 }}
        >
          Cast
        </ThemedText>
        <FlatList
          initialNumToRender={5}
          showsHorizontalScrollIndicator={false}
          data={cast.cast}
          horizontal={true}
          renderItem={({ item }) => (
            <View
              style={{
                marginRight: 10,
                position: "relative",
              }}
            >
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}`,
                }}
                style={{
                  height: 130,
                  aspectRatio: 4 / 5,
                  borderRadius: 5,
                }}
              />
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.9)"]}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 130,
                }}
              />
              <View
                style={{ position: "absolute", bottom: 0, right: 0, left: 0 }}
              >
                <Text
                  style={{ color: "white", textAlign: "center", fontSize: 10 }}
                >
                  {item.original_name}
                </Text>
                <Text
                  style={{
                    textTransform: "uppercase",
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    overflow: "hidden",
                    fontSize: 12,
                  }}
                >
                  {item.character}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={{ padding: 20, paddingTop: 0 }}>
        <ThemedText
          type='defaultSemiBold'
          style={{ fontSize: 18, marginBottom: 10 }}
        >
          People also watched
        </ThemedText>
        <FlatList
          initialNumToRender={5}
          showsHorizontalScrollIndicator={false}
          data={recomendations.results}
          horizontal={true}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: "/[id]",
                params: { id: item.id },
              }}
            >
              <Pressable
                style={{
                  marginRight: 15,
                  position: "relative",
                }}
              >
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                  }}
                  style={{
                    height: 150,
                    aspectRatio: 3 / 5,
                    borderRadius: 5,
                  }}
                />
              </Pressable>
            </Link>
          )}
        />
      </View>
    </ScrollView>
  );
}
