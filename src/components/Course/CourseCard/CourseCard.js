import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import Btn from "../../Layout/Btn/Btn";

const CourseCard = ({ id, title, subtitle }) => {
  return (
    <div style={{ width: "45%", height: "580px" }} className="my-3">
      <Card style={{ height: "100%" }}>
        <CardImg
          style={{
            backgroundPosition: "center",
            objectFit: "cover",
          }}
          top
          width="100%"
          height="45%"
          src={`/images/${id}.jpg`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle style={{ fontWeight: "700" }} tag="h5">
            {title}
          </CardTitle>
          <CardText>{subtitle}</CardText>
        </CardBody>
        <Link to={`/courses/${id}/pages`} style={{ textDecoration: "none" }}>
          <Btn
            style={{ width: "50%", margin: "auto" }}
            text="Discover"
            block
            marginX
          />
        </Link>
      </Card>
    </div>
  );
};

export default CourseCard;
