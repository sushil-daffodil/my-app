import React from "react";
import Form from "./Form";
import {Link, Route} from "react-router-dom";
class App1 extends React.Component {
    render() {
        return ( <div>
                <nav>
                    <Link to="/form">Dashboard</Link>
                </nav>
                <div>
                    <Route path="/form" component={Form}/>
                </div>
            </div>
        );
    }
}


export default App1;
