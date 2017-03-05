import React from 'react';
import $ from 'jquery';
import CurrencyCalcControl from './CurrencyCalcControl.jsx';
import CurrencyCalcChoose  from './CurrencyCalcChoose.jsx';
import CurrencyCalcFooter  from './CurrencyCalcFooter.jsx';

require('./CurrencyCalcApp.scss');

class CurrencyCalcApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currencies: [] };
    }

    componentDidMount() {
        $.ajax({
            url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
            type:'GET',
            success: function(response) {
                this.setState({ currencies: response });
            }.bind(this),
            error: function(){
                alert('Данные не получены');
            }.bind(this)
        });
    }

    render() {
        return (
            <div className="currency_calc">
                <h1 className="currency_calc__header">Конвертер валют</h1>
                <p className="currency_calc__descr">Наличный курс ПриватБанка (в отделениях)</p>
                <CurrencyCalcControl currencies={this.state.currencies}/>
                <CurrencyCalcFooter currencies={this.state.currencies}/>
            </div>                 
        );
    }
};

export default CurrencyCalcApp;