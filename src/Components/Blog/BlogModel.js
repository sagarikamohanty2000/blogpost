import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./BlogModel.module.css";
const BlogModel = (props) => {

  const handleBlogModel = () => {
    props.blogformHandler();
  };
  const BlogFrame = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const imageUrlHandler = (event) => {
      setImageUrl(event.target.value);
      console.log(event.target.value);
    };

    const titleHandler = (event) => {
      setTitle(event.target.value);
    };

    const descriptionHandler = (event) => {
      setDescription(event.target.value);
    };

    const submitHandler = async (event) => {
        event.preventDefault();
      try {
        const response = await fetch(
          "https://crudcrud.com/api/4eb6d9491bec4fd68c4bf391ce987e13/blogPost",
          {
            method: "POST",
            header : {'Content-Type' : 'application/json'},
            body: JSON.stringify({
              id: Math.random(),
              title: title,
              imageUrl: imageUrl,
              description: description,
            }),
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
    };
    return (
      <div className={classes.frame}>
        <form onSubmit={submitHandler}>
          <div>
            <label>Image Url</label>
            <label>Title</label>
            <label> Blog description</label>
          </div>
          <div >
            <input type="url" onChange={imageUrlHandler}></input>
            <input type="text" onChange={titleHandler}></input>
            <input type="text" onChange={descriptionHandler}></input>
          </div>
          <div>
            <button type="submit">Add</button>
            <button type="button" onClick={handleBlogModel}>
              close
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <BlogFrame />,
        document.getElementById("blogForm-model")
      )}
    </>
  );
};

export default BlogModel;
