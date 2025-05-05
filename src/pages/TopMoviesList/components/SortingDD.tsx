import { SORTING_OPTIONS, SortingOptionType } from "@constants/sorting-options";
import { Dropdown, DropdownButton } from "react-bootstrap";

interface Props {
  filter: SortingOptionType;
  handleSelectFilter: (e: SortingOptionType) => void;
}

const SortingDD = ({ filter, handleSelectFilter }: Props) => {
  return (
    <div className="d-flex justify-content-center">
      <DropdownButton
        className="m-2"
        title={`Sort By : ${filter}`}
        variant="success"
        onSelect={(e) => handleSelectFilter(e as SortingOptionType)}
        size="sm"
      >
        {SORTING_OPTIONS?.map((option, indx) => (
          <Dropdown.Item key={indx} eventKey={option}>
            {option}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default SortingDD;
