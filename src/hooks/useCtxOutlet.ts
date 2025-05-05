import { useOutletContext } from "react-router";
import { OutletContextType } from "@pages/Layout";

const useCtxOutlet = () => {
  const values = useOutletContext<OutletContextType>();
  return values;
};

export default useCtxOutlet;
