import React from 'react';
import CurrencyCalcSwap  from './CurrencyCalcSwap.jsx';

require('./CurrencyCalcChoose.scss');

const CurrencyCalcChoose = React.createClass({
    render: function() {
        return (
        <div className="currency_calc_control__choose">
            <select className="currency_calc_control__select" name="select1">
                <option defaultValue="selected">UAH</option>
                <option vlaue="1">USD</option>
                <option vlaue="2">EUR</option>
                <option vlaue="3">RUR</option>
            </select>
            <CurrencyCalcSwap/>
            <select className="currency_calc_control__select" name="select2">
                <option defaultValue="selected">UAH</option>
                <option vlaue="4">USD</option>
                <option vlaue="5">EUR</option>
                <option vlaue="6">RUR</option>
            </select> 
        </div>                           
        );
    }
});

export default CurrencyCalcChoose;