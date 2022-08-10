import { useEffect, useState } from "react";
import { landingPageDTO } from "./movies.model";
import MoviesList from "./MoviesList";

export default function LandingPage() {
  const [moveis, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    
  },[]);
  return (
    <>
      <h3>In Theaters</h3>
      <MoviesList movies={moveis.inTheaters} />
      <h3>Upcoming Releases</h3>
      <MoviesList movies={moveis.upcomingReleases} />
    </>
  );
}
