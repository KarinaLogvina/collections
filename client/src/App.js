import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './components/Start/Start';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {

    return (
        <>
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Start} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/users" exact />
                        <Route path="/registration" exact component={Registration} />
                    </Switch>
                </Router>
            </div>
        </>
    );
}

export default App;
