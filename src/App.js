import { Route, Routes } from "react-router-dom";
import BookSubject from "./components/books/BookSubject";
import Header from "./components/layout/Header";
import Home from "./components/layout/Home";
import { BrowserRouter as Router } from "react-router-dom";
import Tasks from "./components/misc/Tasks";
import Authors from "./components/books/Authors";

function App() {

  return (
    <>
    {
      /* 
      This was the reason it was complaining. Every route related stuff
      shall be under the <Router> that way both Link, see it on header,
      and Routes can work without any issue.
      */
    }
    <Router>
    <div className="container">
      <Header />
      {
        /*
        here all the components won't be shown at the sametime. Rather, each 
        component will be shown according to the link it is referenced. 
        when you go to localhost:3000/ the Home component will be shown
        when you go to localhost:3000/search the BookSubject component is shown
        */
      }
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<BookSubject />} />
        <Route exact path="/tasks" element={<Tasks />} />
        <Route exact path="/authors" element={<Authors />} />
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
