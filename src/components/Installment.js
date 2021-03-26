import React from 'react';
import * as formatter from '../helpers/formatters';
import css from './installment.module.css';

export default function Installment (props) {
  const { id, value, difference, percentage, currentProfit } = props.children;

  const classPositiveValue = 'green-text darken-4';
  const classPositivePercent = 'blue-text darken-4';
  const classNegativeValue = 'red-text darken-4';
  const classNegativePercent = 'deep-orange-text accent-4';

  const classValue = currentProfit ? classPositiveValue : classNegativeValue;
  const classPercent = currentProfit ? classPositivePercent : classNegativePercent;

  return (
    <div className='col s6 m3 l3'>
      <div className={css.flexRow}>
        <span style={{ marginRight: '10px' }}>
          <strong>{id}</strong>
        </span>
        <div className={css.flexColumn}>
          <span className={classValue}>
            <strong>{formatter.formatMoney(value)}</strong>
          </span>
          <span className={classValue}>
            <strong>{formatter.formatMoneyPositiveNegative(difference)}</strong>
          </span>
          <span className={classPercent}>
            {formatter.formatPercent(percentage)}
          </span>
        </div>
      </div>
    </div>
  )
}

