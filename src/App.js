import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cost from './Cost';
import Description from './Description';
import Home from './Home';
import Nav from './Nav';
import Contact from './Contact';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cost-approach" component={Cost} />
                    <Route path="/description-of-property" component={Description} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        )
    }
}

export default App;