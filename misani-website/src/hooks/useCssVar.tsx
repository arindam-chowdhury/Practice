'use client';

import  { useEffect, useState } from 'react';

// Custom hook to get the CSS variable value
export const useCSSVar = (variable: string) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const computed = getComputedStyle(document.documentElement).getPropertyValue(variable);
      setValue(computed.trim());
    }
  }, [variable]);

  return value;
};
