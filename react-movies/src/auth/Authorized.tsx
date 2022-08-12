import { ReactElement, useState } from "react";

export default function Authorized(props: authorizedProps) {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return <>{isAuthorized ? props.authorized : props.notAuthorized}</>;
}

interface authorizedProps {
  authorized: ReactElement;
  notAuthorized?: ReactElement;
  role?: string;
}
