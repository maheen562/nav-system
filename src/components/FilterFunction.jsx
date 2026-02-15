/**
 * This component is responsible for rendering the filter input for a specific column in the table.
 * It uses the DebouncedInput component to debounce user input and prevent excessive re-rendering of the table.
 * @returns {JSX.Element} The rendered FilterFunction component.
 */
import DebouncedInput from "./DebouncedInput";
import { Button } from "@mui/material";

export default function FilterFunction({ column }) {
  const columnFilterValue = column.getFilterValue();

  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? '')}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`Search by ${column.id}...`}
        debounce={300}
        style={{ padding: '5px', width: '200px' }}
      />
      {columnFilterValue && (
        <Button variant="contained" onClick={() => column.setFilterValue('')}>
          Clear
        </Button>
      )}
    </div>
  );
}