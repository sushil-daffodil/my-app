import React from "react";
import Form from "./Form";
import {Link, Route} from "react-router-dom";
import  Home from "./Home";
import  Members from "./Members";
import  MemberDetail from "./MemberDetail";
 class App1 extends React.Component {
    render() {
        return ( <div>
                <nav>
                    <Link to="/form">Dashboard</Link>
                    <Link to="/home">Home</Link>

                </nav>
                <div>
                    <Route exact path="/form" component={Form}/>
                </div>
                <div>
                    <Route path="/home" render={(props) => {
                        return <div>
                            <Home {...props} data={"Home View Content"}/>
                            <Link to="/home/member">Member</Link>
                            <Route path="/home/member" render={(props) => {
                                return <div>
                                    <Members {...props}
                                             data={[{name: "A1", address: "Hisar"}, {name: "A1", address: "Hisar"}]}/>
                                    <Route path="/home/member/member-detail" render={(props) => {
                                        return <MemberDetail  {...props} />
                                    }}/>
                                </div>

                            }}/>
                        </div>
                    }}/>
                </div>

            </div>
        );
    }
}


export default App1;
