import { useState } from 'react';

//Create an editable today's entry page
export default function Entries() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>Weight: {text}</p>
    </>
  );
}
