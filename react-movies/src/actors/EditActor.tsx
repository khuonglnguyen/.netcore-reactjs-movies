import ActorForm from "./ActorForm";

export default function EditActor() {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{
          name: "Johnny Deep",
          dateOfBirth: new Date("1996/03/02"),
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
