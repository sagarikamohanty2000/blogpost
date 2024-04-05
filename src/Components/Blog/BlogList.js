import BlogDisplay from "./BlogDisplay";
import { Container, Row } from "react-bootstrap";

const BlogList = async() => {

    try {
        const response = await fetch(
          "https://crudcrud.com/api/4eb6d9491bec4fd68c4bf391ce987e13t/blogPost",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        if (response.ok) {
          console.log(data);
        } else {
          throw new Error(data.error.message);
        }
      } catch (error) {
        console.log(error);
      }
    
  return (
    <>
      <Container>
        <Row>
          {data.map((post) => (
            <BlogDisplay posts={post} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BlogList;
