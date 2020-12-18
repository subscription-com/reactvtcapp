import './App.css';
import HomeScreen from "./Homescreen";
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router basename={'/tellnyell'}>
            <div>
                <Switch>
                    <Route exact path='/home' component={HomeScreen} />
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
