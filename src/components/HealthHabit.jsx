import { useState } from 'react';

//Create an editable today's entry page
export default function Entries() {
  const [weight, setWeight] = useState('');
  const [water, setWater] = useState('');
  const [sleep, setSleep] = useState('');

  function changeWeight(e) {
    setWeight(e.target.value);
  }

  function changeWater(e) {
    setWater(e.target.value);
  }

  function changeSleep(e) {
    setSleep(e.target.value);
  }

  return (
    <>
      <input value={weight} onChange={changeWeight} />
      <p>Weight: {weight}</p>
      
      <input value={water} onChange={changeWater} />
      <p>Water: {water}</p>

      <input value={sleep} onChange={changeSleep} />
      <p>Sleep: {sleep}</p>
    </>
  );
}
