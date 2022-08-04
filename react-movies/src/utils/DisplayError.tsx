export default function DisplayError(props: displayErrorProps) {
  return (
    <>
      {props.errors ? (
        <ul style={{ color: "red" }}>
          {props.errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

interface displayErrorProps {
  errors?: string[];
}
