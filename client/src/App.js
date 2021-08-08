import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './components/Start/Start';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Profile from './components/Profile/Profile';
import routeNames from './shared/constants/routeNames';

function App() {

    return (
        <>
            <div className="App">
                <Router>
                    <Switch>
                        <Route path={routeNames.START} exact component={Start} />
                        <Route path={routeNames.LOGIN} exact component={Login} />
                        <Route path={routeNames.PROFILE} exact component={Profile} />
                        <Route path={routeNames.REGISTRATE} exact component={Registration} />
                    </Switch>
                </Router>
            </div>
        </>
    );
}

export default App;
