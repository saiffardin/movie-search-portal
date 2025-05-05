import { type ReactNode } from "react";
import { Card } from "react-bootstrap";

interface Props {
  title: string;
  subtitle?: string | number;
  showHorizontalLine?: boolean;
  children?: ReactNode;
}

const MovieData = ({
  title,
  subtitle,
  showHorizontalLine = true,
  children,
}: Props) => {
  return (
    <>
      <Card.Subtitle className="my-2">
        {title} : <span className="fw-light"> {children ?? subtitle}</span>
      </Card.Subtitle>

      {showHorizontalLine && <hr />}
    </>
  );
};

export default MovieData;
