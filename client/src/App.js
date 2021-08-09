import React from "react";
import { BrowserRouter as Router, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import SEPractice from "./pages/SEPractice";
import SubmitArticle from "./pages/SubmitArticle"; 
import NotFoundPage from "./pages/404";

const App = () =>  {
    return (
        <Router>
          <div>
            <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>            
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/SEPractice">Select the Practice</NavLink></li>
              <li><NavLink to="/SubmitArticle">Submit an Article</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              
              <Route path="/SEPractice" component={SEPractice}/>
              
              <Route path="/SubmitArticle" component={S}/>
            </div>
          </div> 
       </Router>
    );
}
 
export default App;
