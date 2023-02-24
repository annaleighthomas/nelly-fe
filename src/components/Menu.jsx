import React from 'react'

const Menu = () => {

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
        <div className="menu">
            <h1>Other post you may like</h1>
    {posts.map(post=> (
        <div className="post" key={post.id}>
            <img src={post.img} alt=""/>
            <h2>{post.title}</h2>
            <button>Read More</button>
        </div>
    ))}
        </div>
    )
}

export default Menu