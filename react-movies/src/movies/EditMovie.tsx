import MovieForm from "./MovieForm";

export default function EditMovie() {
    return (
      <>
        <h3>Edit Movie</h3>
      <MovieForm
        model={{ title: "John Wick", inTheaters: true, trailer: "url" ,realeaseDate:new Date('2019-01-01')}}
        onSubmit={(values) => console.log(values)}
      ></MovieForm>
      </>
    );
  }
  