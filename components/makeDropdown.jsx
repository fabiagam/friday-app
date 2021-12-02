/*************************************
 * Car Make Dropdown
 * @file: components/makeDropdown.jsx
 * @author: James Abiagam
 ************************************/
import Select from "react-select";

const makeDropDown = ({ allCars, value, onChange }) => {
  const carList = allCars.map((car) => {
    return { value: car, label: car };
  });

  const options = [{ value: "", label: "Select Car Make" }, ...carList];

  return allCars ? (
    <Select
      classNamePrefix="dropdown"
      options={options}
      value={options.find((c) => c.value === value)}
      onChange={(val) => onChange(val.value)}
    />
  ) : (
    <select id="make" name="make">
      <option value="Not Listed"></option>
    </select>
  );
};

export default makeDropDown;
