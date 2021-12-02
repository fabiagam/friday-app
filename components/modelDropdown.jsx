/*************************************
 * Car Models Dropdown
 * @file: components/modelDropdown.jsx
 * @author: James Abiagam
 ************************************/
import Select from "react-select";

const modelDropDown = ({ allModels, value, onChange }) => {
  const modelList = allModels.map((item) => {
    return { value: item, label: item };
  });

  const options = [{ value: "", label: `Select Model` }, ...modelList];
  console.info(`Model list - ${JSON.stringify(options)}`);

  return allModels ? (
    <Select
      options={options}
      value={options.find((c) => c.value === value)}
      onChange={(val) => onChange(val.value)}
    />
  ) : (
    <select id="model" name="model">
      <option value="Not Listed"></option>
    </select>
  );
};

export default modelDropDown;
