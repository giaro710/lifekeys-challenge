import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";

import { courses } from "./data.json";

// components
import Topbar from "./components/Topbar/Topbar";
import Layout from "./hoc/Layout/Layout";
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
      <Layout>
        <BrowserRouter>
          <Route path="/courses" exact component={CoursesPage} />
          <Route path="/courses/:id/pages" exact component={SingleCoursePage} />
          <Route path="/courses/:id/quiz" exact component={QuizPage} />
          <Route
            path="/courses/:id/end"
            exact
            component={CongratulationsPage}
          />
        </BrowserRouter>
      </Layout>
    </div>
  );
};

export default App;
