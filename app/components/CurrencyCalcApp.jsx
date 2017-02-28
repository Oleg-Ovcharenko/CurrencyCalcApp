import React from 'react';
import $ from 'jquery';
import { CurrencyCalcControl }  from './CurrencyCalcControl.jsx';
import { CurrencyCalcChoose }  from './CurrencyCalcChoose.jsx';
import { CurrencyCalcFooter }  from './CurrencyCalcFooter.jsx';

require('./CurrencyCalcApp.scss');

let CurrencyCalcApp = React.createClass({
    getExchangeRate: function() {
        var result = $.ajax({
            url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
            type:'GET',
            success: function(response) {
                return response;
            }
        });
    },

    getInitialState: function() {
        return {
            currencies: 0
        };
    },

    componentDidMount: function() {
        this.setState({ currencies: this.getExchangeRate() });
        console.log(this.state.currencies); 
    },

    render: function() {
        console.log(this.state.currencies);
        return (
            <div className="currency_calc">
                <h1 className="currency_calc__header">Конвертер валют</h1>
                <p className="currency_calc__descr">Наличный курс ПриватБанка (в отделениях)</p>
                <CurrencyCalcControl/>
                <CurrencyCalcFooter currencies={'sdf'}/>
            </div>                 
        );
    }
});

export { CurrencyCalcApp };

