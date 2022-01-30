import React from 'react';

const inputStyles = `
  leading-4 sunken-border px-2 py-1
`

const Input = ({onChange, value }) => (
  <input value={value} onChange={onChange} className={inputStyles} />
);

export { Input };