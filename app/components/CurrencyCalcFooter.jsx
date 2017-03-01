import React from 'react';

require('./CurrencyCalcFooter.scss');  

let CurrencyCalcFooter = React.createClass({
    getDateNow: function() {
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return day+'.'+month+'.'+year;
    },

    getInitialState: function() {
        return {
            date: '0.0.0'
            //currencies: this.props.currencies
        };
    },

    componentWillMount: function() {
        this.setState({ date: this.getDateNow() });
    },

    render: function() {
        console.log(this.props.currencies);
        return (
            <div className="currency_calc_footer">
                <p className="currency_calc_footer__inform">Покупка на : { this.state.date }
                    {
                        this.props.currencies.map(function(el){
                            return (<span key={el.ccy}><b> {el.ccy}: </b> {el.buy} </span>);
                        })
                    }
                </p>
            </div>                          
        );
    }
});

export { CurrencyCalcFooter };
