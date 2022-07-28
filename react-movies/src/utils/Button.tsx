export default function Button(props: buttonProps) {
  return (
    <button className="btn btn-primary" onClick={props.onClieck}>
      {props.children}
    </button>
  );
}

interface buttonProps {
  children: React.ReactNode;
  onClieck(): void;
}
