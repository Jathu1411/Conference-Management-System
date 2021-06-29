import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// components
import sampleform from './Components/Vithursan/sampleform';









export default class App extends React.Component {
constructor(props) {
 super(props);
 }


 render() {
    return <Router>
        <Switch>
        <Route path='/' exact={true} component={sampleform}/>
        </Switch>
    </Router>
   
 
 }
}
