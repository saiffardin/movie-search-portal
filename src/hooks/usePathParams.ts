import { useParams } from "react-router";
import { PATH_PARAMS } from "@constants/paths";

type PathParamsType = (typeof PATH_PARAMS)[keyof typeof PATH_PARAMS];

const usePathParams = () => {
  const values = useParams<PathParamsType>();

  return values;
};

export default usePathParams;
