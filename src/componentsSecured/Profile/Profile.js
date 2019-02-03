import React from 'react';

export default function Blog(props) {
    const data = props.blogData.map(item => {
        return (
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
            </div>
        );
    });

    return (
        <div>
            <h1>Blog</h1>
            {data}
        </div>
    );
}
