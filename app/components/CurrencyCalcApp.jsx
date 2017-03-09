import React from 'react';

import CurrencyCalcControl from './CurrencyCalcControl.jsx';
import CurrencyCalcFooter  from './CurrencyCalcFooter.jsx';

require('./CurrencyCalcApp.scss');

class CurrencyCalcApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currencies: [],
         };
    }

    componentDidMount() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
        xhr.onload = function() {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                response.push({ ccy:"UAH", base_ccy:"UAH", buy:"1", sale:"1" });
                this.setState({ currencies: response });
            }
            else {
                alert('Request failed.  Returned status of ' + xhr.status);
            }
        }.bind(this);
        xhr.send();
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