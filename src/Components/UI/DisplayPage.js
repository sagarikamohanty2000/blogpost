import React, {useState} from 'react';
import BlogModel from '../Blog/BlogModel';
import classes from './DisplayPage.module.css'

const DisplayPage = () => {

     const [addBtn, setAddBtn] = useState(false);

     const addBtnHandler = () => {
        setAddBtn(true)
     }

     const addBtnCloseHandler = () => {
        setAddBtn(false);
     }
    return(
        < div className = {classes.bodyFrame}>
        {addBtn && <BlogModel blogformHandler = {addBtnCloseHandler}/>}
        <h2>Blog post</h2>
        <button onClick={addBtnHandler}> Add blog</button>
        </div>
    )
}

export default DisplayPage;