import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './components/Start/Start';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Profile from './components/Profile/Profile';
import routeNames from './shared/constants/routeNames';
import { IntlProvider } from 'react-intl'
import enMessages from "./shared/localization/en.json"

function App() {

    return (
        <>
            <div className="App">
                <IntlProvider messages={enMessages} locale="en" defaultLocale="en">
                    <Router>
                        <Switch>
                            <Route path={routeNames.START} exact component={Start} />
                            <Route path={routeNames.LOGIN} exact component={Login} />
                            <Route path={routeNames.PROFILE} exact component={Profile} />
                            <Route path={routeNames.REGISTRATE} exact component={Registration} />
                        </Switch>
                    </Router>
                </IntlProvider>
            </div>
        </>
    );
}

export default App;
