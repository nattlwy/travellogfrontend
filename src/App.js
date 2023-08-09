import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import ReviewList from "./components/reviewList";
import EditReview from "./components/editReview";
import CreateReview from "./components/createReview";

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
    {/* <Navbar /> */}

      {/* <div className="container"> */}
        <Route path="/" exact element={<ReviewList />} />
        <Route path="/create" element={<CreateReview />} />
        <Route path="/update/:id" element={<EditReview />} />
      {/* </div> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
