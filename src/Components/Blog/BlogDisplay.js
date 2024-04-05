import {Col } from "react-bootstrap";

const BlogDisplay = (props) => {
  return (
    <Col xs={4}>
      <h3>{props.posts.title}</h3>
      <img src={props.posts.imageUrl}></img>
      <p>{props.posts.description}</p>
      <button type="reset">edit</button>
      <button type="button">delete</button>
    </Col>
  );
};

export default BlogDisplay;
