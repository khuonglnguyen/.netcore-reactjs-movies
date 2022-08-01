import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
    return (
      <>
        <h3>Edit Movie Theater</h3>
        <MovieTheaterForm
        model={{ name: "Hello" }}
        onSubmit={(values) => console.log(values)}
      ></MovieTheaterForm>
      </>
    );
  }
  