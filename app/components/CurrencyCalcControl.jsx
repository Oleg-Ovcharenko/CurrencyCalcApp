import React from 'react';
import { CurrencyCalcChoose }  from './CurrencyCalcChoose.jsx';

require('./CurrencyCalcControl.scss');

let CurrencyCalcControl = React.createClass({
    handleInput: function(event) {
        console.log(event.target.value);
    },
    render: function() {
        return (
            <div className="currency_calc_control">
                <div className="currency_calc_control__input">
                    <label htmlFor="currency_calc__input_text" className="currency_calc_control__input_label">Введите сумму</label><br/>
                    <input id="currency_calc__input_text" className="currency_calc_control__input_text" type="text" placeholder="0" onChange={this.handleInput}/>
                </div>
                <CurrencyCalcChoose />
                <div className="currency_calc_control__output">
                    <label htmlFor="currency_calc__output_text" className="currency_calc_control__output_label">Результат</label><br/>
                    <input id="currency_calc__output_text" className="currency_calc_control__output_text" type="text"  defaultValue='0' disabled/>
                </div> 
            </div>                 
        );
    }
});

export { CurrencyCalcControl };

