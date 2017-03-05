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
        };
    },

    componentWillMount: function() {
        this.setState({ date: this.getDateNow() });
    },

    render: function() {
        return (
            <div className="currency_calc_footer">
                <p className="currency_calc_footer__inform">Покупка на : { this.state.date }
                    {
                        this.props.currencies.map(function(el){
                            return (<span key={el.ccy}><b> {el.ccy}: </b> {parseFloat(el.buy).toFixed(2)} </span>);
                        })
                    }
                </p>
            </div>                          
        );
    }
});

export default CurrencyCalcFooter;
