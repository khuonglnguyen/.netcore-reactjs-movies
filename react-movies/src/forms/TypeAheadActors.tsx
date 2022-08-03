import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";

export default function TypeAheadActors(props: typeAheadActorsProps) {
  const actors: actorMovieDTO[] = [
    {
      id: 1,
      name: "Scarlett Johansson",
      character: "",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY209_CR16,0,140,209_AL_.jpg",
    },
    {
      id: 2,
      name: "Elizabeth Olsen",
      character: "",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY209_CR4,0,140,209_AL_.jpg",
    },
    {
      id: 3,
      name: "Sophie Turner",
      character: "",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMjM5Mjg4MDQ3MF5BMl5BanBnXkFtZTgwMDA2MjkxMjI@._V1_UX140_CR0,0,140,209_AL_.jpg",
    },
  ];

  return (
    <div className="mb-3">
      <label htmlFor="">{props.displayName}</label>
      <Typeahead
        id="typeahead"
        onChange={(actor) => {
          console.log(actor);
        }}
        options={actors}
        labelKey="name"
        filterBy={["name"]}
        placeholder="Write the name of actor..."
        minLength={1}
      ></Typeahead>
    </div>
  );
}

interface typeAheadActorsProps {
  displayName: string;
  actors: actorMovieDTO[];
}
