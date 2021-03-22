import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";

import { courses } from "./data.json";

import ScrollToTop from "./hoc/ScrollToTop/ScrollToTop";

import Topbar from "./components/Layout/Topbar/Topbar";
import CoursesPage from "./components/Pages/CoursesPage/CoursesPage";
import SingleCoursePage from "./components/Pages/SingleCoursePage/SingleCoursePage";
import QuizPage from "./components/Pages/QuizPage/QuizPage";
import CongratulationsPage from "./components/Pages/CongratulationsPage/CongratulationsPage";

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
                component={() => <CoursesPage courses={courses} />}
              />
              <Route
                path="/courses/:id/pages"
                exact
                component={() => <SingleCoursePage courses={courses} />}
              />
              <Route
                path="/courses/:id/quiz"
                exact
                component={() => <QuizPage courses={courses} />}
              />
              <Route
                path="/courses/:id/end"
                exact
                component={() => <CongratulationsPage courses={courses} />}
              />
              <Route
                render={() => <Redirect to={{ pathname: "/courses" }} />}
              />
            </ScrollToTop>
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
