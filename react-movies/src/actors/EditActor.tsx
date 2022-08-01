import ActorForm from "./ActorForm";

export default function EditActor() {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{
          name: "Johnny Deep",
          dateOfBirth: new Date("1996/03/02"),
          pictureURL: "https://m.media-amazon.com/images/M/MV5BOTBhMTI1NDQtYmU4Mi00MjYyLTk5MjEtZjllMDkxOWY3ZGRhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
          biography: `#Something This person was born in **DR**`
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
