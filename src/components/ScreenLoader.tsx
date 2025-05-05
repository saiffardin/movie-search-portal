import classNames from "classnames";
import { Spinner } from "react-bootstrap";

interface Props {
  fullscreen?: boolean;
}

const ScreenLoader = ({ fullscreen }: Props) => {
  return (
    <div
      className={classNames("text-center my-2 py-2", {
        "vh-100 my-auto": fullscreen,
      })}
    >
      <Spinner animation="grow" />
    </div>
  );
};

export default ScreenLoader;
