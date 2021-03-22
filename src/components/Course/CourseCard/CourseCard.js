import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";

const CourseCard = ({ id, title, subtitle }) => {
  return (
    <div style={{ width: "45%" }}>
      <Card className="my-3">
        <CardImg
          top
          width="100%"
          src={`/images/${id}.jpg`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle style={{ fontWeight: "700" }} tag="h5">
            {title}
          </CardTitle>
          <CardText>{subtitle}</CardText>
        </CardBody>
        <Link to={`/courses/${id}/pages`}>
          <Button
            style={{ background: "#e28336", border: "none" }}
            className="m-3 float-right"
            color="primary"
          >
            Discover
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default CourseCard;
