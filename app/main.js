import React                from 'react';
import ReactDOM             from 'react-dom';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { CurrencyCalcApp }  from './components/CurrencyCalcApp.jsx' ;

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <CurrencyCalcApp />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('mount-point'));

