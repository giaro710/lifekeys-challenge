import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";

import { data } from "./data";

import Topbar from "./hoc/Topbar/Topbar";
import CoursesPage from "./components/pages/CoursesPage/CoursesPage";
import SingleCoursePage from "./components/pages/SingleCoursePage/SingleCoursePage";
import QuizPage from "./components/pages/QuizPage/QuizPage";
import CongratulationsPage from "./components/pages/CongratulationsPage/CongratulationsPage";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Container>
        <Topbar />
      </Container>
      <Container className="mt-5">
        <BrowserRouter>
          <Route
            path="/courses"
            exact
            component={() => <CoursesPage courses={data.courses} />}
          />
          <Route
            path="/courses/:id/pages"
            exact
            component={() => <SingleCoursePage courses={data.courses} />}
          />
          <Route
            path="/courses/:id/quiz"
            exact
            component={() => <QuizPage courses={data.courses} />}
          />
          <Route
            path="/courses/:id/end"
            exact
            component={() => <CongratulationsPage courses={data.courses} />}
          />
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
