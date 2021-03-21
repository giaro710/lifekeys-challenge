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

// import img from "../../../assets/images/cooking-min.jpg";

const CourseCard = ({ id, title, subtitle, image }) => {
  console.log("imageurl", `${image}`);
  return (
    <div style={{ width: "45%" }}>
      <Card className="my-3">
        <CardImg top width="100%" src={`${image}`} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{subtitle}</CardText>
        </CardBody>
        <Link to={`/courses/${id}/pages`}>
          <Button className="m-3" color="primary">
            Go to the course
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default CourseCard;
