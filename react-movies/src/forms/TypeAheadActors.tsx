import { ReactElement, useState } from "react";
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

  const selected: actorMovieDTO[] = [];

  const [draggedElement, setDraggedElement] = useState<
    actorMovieDTO | undefined
  >(undefined);

  function handleDragStart(actor: actorMovieDTO) {
    setDraggedElement(actor);
  }

  function handleDragOver(actor: actorMovieDTO) {
    if (!draggedElement) {
      return;
    }

    if (actor.id !== draggedElement.id) {
      const draggedElementIndex = props.actors.findIndex(
        (x) => x.id === draggedElement.id
      );
      const actorIndex = props.actors.findIndex((x) => x.id === actor.id);

      const actors = [...props.actors];
      actors[actorIndex] = draggedElement;
      actors[draggedElementIndex] = actor;
      props.onAdd(actors);
    }
  }

  return (
    <div className="mb-3">
      <label htmlFor="">{props.displayName}</label>
      <Typeahead
        id="typeahead"
        onChange={(actors) => {
          if (props.actors.findIndex((x) => x.id === actors[0].id) === -1) {
            props.onAdd([...props.actors, actors[0]]);
          }
          console.log(actors);
        }}
        options={actors}
        labelKey={(actor) => actor.name}
        filterBy={["name"]}
        placeholder="Write the name of actor..."
        minLength={1}
        flip={true}
        selected={selected}
        renderMenuItemChildren={(actor) => (
          <>
            <img
              alt="actor"
              src={actor.picture}
              style={{
                height: "64px",
                marginRight: "10px",
                width: "64px",
              }}
            />
            <span>{actor.name}</span>
          </>
        )}
      ></Typeahead>
      <ul className="list-group">
        {props.actors.map((actor) => (
          <li key={actor.id} className="list-group-item list-group-item-action">
            {props.listUI(actor)}
            <span
              className="badge badge-primary badge-pill pointer text-dark"
              style={{ marginLeft: "0.5rem" }}
              onClick={() => {
                props.onRemove(actor);
              }}
            >X</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface typeAheadActorsProps {
  displayName: string;
  actors: actorMovieDTO[];
  onAdd(actor: actorMovieDTO[]): void;
  listUI(actor: actorMovieDTO): ReactElement;
  onRemove(actor: actorMovieDTO): void;
}
