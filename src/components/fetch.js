import React, { useState, useEffect } from "react";
import './fetch.css';

const Fetch = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch("http://localhost:3030/post")
            .then((res) => res.json())
            .then((json) => setMenu(json))
    }, [])

    const handleDelete = (id => {
        fetch(`http://localhost:3030/post/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                setMenu(menu.filter(post => post.id !== id))
            })
            .catch(error => {
                alert("error deleting", error);
            })
    })

    return (
        <div>
            <div className="imge">
            <div className="main-container">
                {menu.map((post) => (
                    <div className="container">
                        <div className="box">
                            <img className="img2" src={post.img} />
                            <h1 className="box-content">{post.nama}</h1>
                            <h3 className="box-content">{post.price}</h3>
                            <button onClick={() => { handleDelete(post.id)}}>Hapus</button>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}
export default Fetch