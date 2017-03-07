import React from 'react';
//import CurrencyCalcChoose from './CurrencyCalcChoose.jsx';

require('./CurrencyCalcControl.scss');
require('./CurrencyCalcChoose.scss');
require('./CurrencyCalcSwap.scss');

class CurrencyCalcControl extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inpCurrency: 0,
            outCurrency: 0,
            select1: 0,
            select2: 0
        };

        this.handleInput   = this.handleInput.bind(this);
        //this.defaultParams = this.defaultParams.bind(this);
        this.select1       = this.select1.bind(this);
        this.select2       = this.select2.bind(this);
    }

    handleInput (event) {
        let rep = /[^\d]/g; 
        let inputCurrency = event.target.value.replace(rep, '');
        let empty = 0;
        let newCurrency = 0
        
        if(inputCurrency.length === 0) {
            newCurrency = (parseInt(empty) * this.state.select1) / this.state.select2;
        } else {
            newCurrency = (parseInt(inputCurrency) * this.state.select1) / this.state.select2;
        }

        this.setState({inpCurrency: inputCurrency});
        this.setState({outCurrency: newCurrency.toFixed(2) });
    }

    select1 (event) {
        let newCurrency = (this.state.inpCurrency * event.target.value) / this.state.select2;
        this.setState({select1: parseFloat(event.target.value)});
        this.setState({outCurrency: newCurrency.toFixed(2) });
    }

    select2 (event) {
        let newCurrency = (this.state.inpCurrency * this.state.select1) / event.target.value; 
        this.setState({select2: parseFloat(event.target.value)});
        this.setState({outCurrency: newCurrency.toFixed(2) }); 
    }

    componentWillReceiveProps(nextProps) {
        nextProps.currencies.map(function def(el){
            if(el.ccy == "UAH") {
                this.setState({select1: el.buy });
            }

            if(el.ccy == "USD") {
                this.setState({select2: el.buy });
            }
        }.bind(this))
    }

    render () {
        let selc1 = this.state.select1;
        let selc2 = this.state.select2;

        return (
            <div className="currency_calc_control">
                <div className="currency_calc_control__input">
                    <label htmlFor="currency_calc__input_text" className="currency_calc_control__input_label">Введите сумму</label><br/>
                    <input id="currency_calc__input_text" className="currency_calc_control__input_text" type="tel" placeholder="0" value={this.state.inpCurrency} onChange={this.handleInput} maxLength="18"/>
                </div>
                <div className="currency_calc_control__choose">
                    <select className="currency_calc_control__select" name="select1" onChange={this.select1} value={this.state.value}>
                        {
                            this.props.currencies.map(function name(el) {
                                return (<option key={el.ccy} value={el.buy} selected={selc1 == el.buy}>{el.ccy}</option>);
                            })
                        }
                    </select>
                    <button className="currency_calc_control__swap">&nbsp;</button>
                    <select className="currency_calc_control__select" name="select2" onChange={this.select2} value={this.state.value}>
                        {
                            this.props.currencies.map(function name(el) {
                                return (<option key={el.ccy} value={el.buy} selected={selc2 == el.buy}>{el.ccy}</option>);
                            })
                        }
                    </select> 
                </div>
                <div className="currency_calc_control__output">
                    <label htmlFor="currency_calc__output_text" className="currency_calc_control__output_label">Результат</label><br/>
                    <input id="currency_calc__output_text" className="currency_calc_control__output_text" type="text" value={this.state.outCurrency} disabled/>
                </div> 
            </div>                 
        );
    }
};

export default CurrencyCalcControl;