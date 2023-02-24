import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

    const posts = [
        {
            id: 1,
            title: "first post",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam asperiores velit laboriosam, sint illo, accusamus explicabo accusantium, expedita quia voluptate atque repellat reiciendis harum cum ullam eaque aut voluptatem.",
            img: "https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg",
        },
        {
            id: 2,
            title: "second post",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam asperiores velit laboriosam, sint illo, accusamus explicabo accusantium, expedita quia voluptate atque repellat reiciendis harum cum ullam eaque aut voluptatem.",
            img: "https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg",
        },
        {
            id: 3,
            title: "third post",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam asperiores velit laboriosam, sint illo, accusamus explicabo accusantium, expedita quia voluptate atque repellat reiciendis harum cum ullam eaque aut voluptatem.",
            img: "https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg",
        },
    ];

    return (
        <div className="home">
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                            <div className="img">
                            <img src={post.img} alt=""/>
                            </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home