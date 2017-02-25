import React            from 'react';
import { RaisedButton } from 'material-ui';

require('./CurrencyCalcApp.scss'); 

let CurrencyCalcApp = React.createClass({
    render: function() {
        return (
            <RaisedButton label="Кнопка" />
        );
    }
});

export { CurrencyCalcApp };

