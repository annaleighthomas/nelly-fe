import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {

    return (
        <div className="single">
            <div className="content">
                <img src="https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-fre-image-165292602e5.jpg"/>
            <div className="user">
                <img src="https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-fre-image-165292602e5.jpg"/>
            <div className="info">
                <span>Nelly</span>
                <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
                <Link to={`/write?edit=2`}>
                <img src={Edit} alt=""/>
                </Link>
                <img src={Delete} alt=""/>
            </div>
            </div>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa minus rerum ex possimus. Autem repellat, quasi expedita accusamus fugit et obcaecati odit quis quo, eveniet laborum repellendus nisi, eos animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime ea sed laborum, odio voluptatem harum doloremque dolor necessitatibus, ex dolorum optio maiores. Aperiam ad quaerat animi provident aspernatur sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa corporis perspiciatis voluptatum inventore molestias fugit? Quidem odit, eum tempore eveniet quos dicta commodi modi voluptatum sapiente neque voluptatibus, soluta impedit.</p>
            </div>
            <Menu/>
        </div>
    );
};

export default Single