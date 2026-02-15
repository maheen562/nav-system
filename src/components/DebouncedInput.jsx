/**
 * DebouncedInput.jsx
 * A reusable input component that debounces user input.
 * This component takes in an initial value, an onChange callback, and a debounce delay.
 * Code reused from https://github.com/dmitrisanzharov/tanstack-yt-react-table-v8/blob/master/src/components/DebounceInput.js
 */
import React from "react";

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default DebouncedInput;