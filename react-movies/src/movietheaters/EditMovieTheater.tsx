import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
  return (
    <>
      <h3>Edit Movie Theater</h3>
      <MovieTheaterForm
        model={{
          name: "Hello",
          latitude: 10.042880099928833,
          longitude: 105.76653169072291,
        }}
        onSubmit={(values) => console.log(values)}
      ></MovieTheaterForm>
    </>
  );
}
