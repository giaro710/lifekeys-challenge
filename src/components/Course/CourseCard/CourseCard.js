import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";

const CourseCard = () => {
  return (
    <div>
      <Col>
        <Card className="my-3">
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Italian Food</CardTitle>
            <CardText>
              Discover the best recipes to nail every dinner with friends
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
          <Link to="/courses/2/pages">
            <Button className="m-3" color="primary">
              Go to the course
            </Button>
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default CourseCard;
