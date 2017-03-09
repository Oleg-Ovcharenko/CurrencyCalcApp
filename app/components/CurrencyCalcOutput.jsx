import React from 'react';

require('./CurrencyCalcOutput.scss');

class CurrencyCalcOutput extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render () {
        return(
            <div className="currency_calc_control__output">
                <label htmlFor="currency_calc__output_text" className="currency_calc_control__output_label">Результат</label><br/>
                <input id="currency_calc__output_text" className="currency_calc_control__output_text" type="text" value={this.props.outCurrency} disabled/>
            </div>
        );
    }
};

export default CurrencyCalcOutput;