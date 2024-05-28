const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDE0NGMzYTA3ZWQ1ZDFlZGE2ZmUyYjVmNjUyYTNhOCIsInN1YiI6IjY2NTUyM2ZjYTYyN2Y2ZDU4NzUzN2Y4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iIz4swpPTn-jVNRf6036HDxqbE5pu316mm6l7_P8Lag",
  },
};

export async function getMovieFromId(id: number) {
  const url = `https://api.themoviedb.org/3/movie/${id}`;

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("A busca pelos filmes falhou");
  }
}

export async function getMovieCast(id: number) {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits`;

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("A busca pelos filmes falhou");
  }
}

export async function getMovieRecomendations(id: number) {
  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations`;

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("A busca pelos filmes falhou");
  }
}
