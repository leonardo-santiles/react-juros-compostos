import React from 'react';

export default function Form ({data, onChangeData}) {
  const {initialValue, monthlyInterest, monthlyPeriod} = data;
  
  const handleInitialValueChange = (event) => {
    const value = parseFloat(event.target.value, 10);
    onChangeData (value, null, null);
  };

  const handleMonthlyInterest = (event) => {
    const value = parseFloat(event.target.value, 10);
    onChangeData (null, value, null);
  };

  const handleMonthlyPeriod = (event) => {
    const value = parseFloat(event.target.value, 10);
    onChangeData (null, null, value);
  };

  return (
    <div className = 'center row'>
      <div className = 'col input-field s6 m4 l4'>
        <label htmlFor='inputInitialValue' className='active'>
          Capital inicial:
        </label>
        <input
          id='inputInitialValue'
          type='number'
          value={initialValue}
          min='100'
          max='100000'
          step='100'
          onChange={handleInitialValueChange}
        />
      </div>
      <div className = 'col input-field s6 m4 l4'>
        <label htmlFor='inputMonthlyInterest' className='active'>
          Taxa de Juros (mensal):
        </label>
        <input
          id='inputMonthlyInterest'
          type='number'
          value={monthlyInterest}
          min='-12'
          max='12'
          step='0.1'
          onChange={handleMonthlyInterest}
        />
      </div>
      <div className = 'col input-field s6 m4 l4'>
        <label htmlFor="inputMonthlyPeriod" className='active'>
          Período Mensal:
        </label>
        <input
          id='inputMonthlyPeriod'
          type='number'
          value={monthlyPeriod}
          min='1'
          max='36'
          step='1'
          onChange={handleMonthlyPeriod}
        />
      </div>
    </div>
  )
}
