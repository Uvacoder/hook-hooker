import { useRef, useState } from 'react';

const useBoolean = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = useRef({
    on: () => setValue(true),
    off: () => setValue(false),
    toggle: () => setValue(v => !v),
  });

  return [value, updateValue.current];
};

export default useBoolean;
