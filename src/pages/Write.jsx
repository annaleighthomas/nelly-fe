import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Write = () => {
    const [value, setValue] = useState('');

    return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder='Title'/>
                <div className="editorContainer">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue}/>
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status:</b> Draft
                    </span>
                    <span>
                        <b>Visibility:</b> Public
                    </span>
                    <input style={{display: "none"}} type="file" id="file" name="" />
                    <label className="file" htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save Draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" name="cat" value="projects" id="projects"/>
                        <label htmlFor="projects">Projects</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="Travel" id="Travel"/>
                        <label htmlFor="Travel">Travel</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="Technology" id="Technology"/>
                        <label htmlFor="Technology">Technology</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="Art" id="Art"/>
                        <label htmlFor="Art">Art</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="food" id="food"/>
                        <label htmlFor="food">Food</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write