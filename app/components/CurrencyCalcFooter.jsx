import React from 'react';

require('./CurrencyCalcFooter.scss');  

export default class CurrencyCalcFooter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: '0.0.0'
        };
    }

    getDateNow() {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return day+'.'+month+'.'+year;
    }

    componentWillMount() {
        this.setState({ date: this.getDateNow() });
    }

    render() {
        return (
            <div className="currency_calc_footer">
                <p className="currency_calc_footer__inform">Покупка на : { this.state.date }
                    {
                        this.props.currencies.map(function(el){
                            if(el.ccy == "UAH") {
                                return;
                            } else {
                                return (<span key={el.ccy}><b> {el.ccy}: </b> {parseFloat(el.buy).toFixed(2)} </span>);
                            }
                        })
                    }
                </p>
            </div>                          
        );
    }
};