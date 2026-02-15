// FilterFunction.jsx
import DebouncedInput from "./DebouncedInput";

export default function FilterFunction({ column }) {
  const columnFilterValue = column.getFilterValue();

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? '')}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`Search ${column.id}...`}
        debounce={300}
        style={{ padding: '5px', width: '200px' }}
      />
      {columnFilterValue && (
        <button onClick={() => column.setFilterValue('')}>
          Clear
        </button>
      )}
    </div>
  );
}