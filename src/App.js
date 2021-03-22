import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";

import { data } from "./data";

import ScrollToTop from "./hoc/ScrollToTop/ScrollToTop";

import Topbar from "./components/Layout/Topbar/Topbar";
import CoursesPage from "./components/Pages/CoursesPage/CoursesPage";
import SingleCoursePage from "./components/Pages/SingleCoursePage/SingleCoursePage";
import QuizPage from "./components/Pages/QuizPage/QuizPage";
import CongratulationsPage from "./components/Pages/CongratulationsPage/CongratulationsPage";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Container>
        <Topbar />
      </Container>
      <Container className="mt-5">
        <BrowserRouter>
          <Switch>
            <ScrollToTop>
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
            </ScrollToTop>

            <Route render={() => <Redirect to={{ pathname: "/courses" }} />} />
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
