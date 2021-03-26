import React, { useState, useEffect} from 'react';
import Form from './components/Form';
import Installment from './components/Installment';
import Installments from './components/Installments';

function App() {
  const [initialValue, setInitialValue] = useState(1000);
  const [monthlyInterest, setMonthlyInterest] = useState(0.5);
  const [monthlyPeriod, setMonthlyPeriod] = useState(1);
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    calculateInterest(initialValue, monthlyInterest, monthlyPeriod);
  }, [initialValue, monthlyInterest, monthlyPeriod]);

  const handleFormChange = (newValue, newInterest, newPeriod) => {
    if (newValue !== null) {
      setInitialValue(newValue);
      return;
    };
    if (newInterest !== null) {
      setMonthlyInterest(newInterest);
      return;
    }
    setMonthlyPeriod(newPeriod);
  };

  const calculateInterest = (initialValue, monthlyInterest, monthlyPeriod) => {
    const newIntellments = [];
    let currentId = 1;
    let currentValue = initialValue;
    let currentPercentage = 0;
    const currentProfit = monthlyInterest >= 0;
    
    for (let i = 1; i <= monthlyPeriod; i++) {
      const installmentIncome = currentValue * Math.abs(monthlyInterest) / 100
      
      currentValue = 
        monthlyInterest >= 0
        ? currentValue + installmentIncome
        : currentValue - installmentIncome;
      
      currentPercentage = (currentValue / initialValue - 1) * 100;

      newIntellments.push({
        id: currentId++,
        value: currentValue,
        difference: currentValue - initialValue,
        percentage: currentPercentage,
        currentProfit,
      });
    };
    
    setInstallments(newIntellments);
  };

  return (
    <div className='container center'>
       <h1 className='center'>React - Juros Compostos</h1>
      <Form 
      data = {{initialValue, monthlyInterest, monthlyPeriod}}
      onChangeData={handleFormChange}
      />
      <Installments>
        {installments.map(installment => {
          return <Installment key={installment.id}>{installment}</Installment>})
        }
      </Installments>
    </div>
  )
}

export default App;
