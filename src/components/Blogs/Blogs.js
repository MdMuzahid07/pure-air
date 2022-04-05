import React, { Component } from 'react';

class Blogs extends Component {
    render() {
        return (
            <div className='blog-container'>
                <div className="blog-card">
                    <h1>What is context api</h1>
                    <p>
                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. Let's see how to use it.

                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
                    </p>
                </div>
                <div className="blog-card">
                    <h1>What is semantic tag</h1>
                    <p>
                        Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in web pages and web applications rather than merely to define its presentation or look. Semantic HTML is processed by traditional web browsers as well as by many other user agents.
                    </p>
                </div>
            </div>
        );
    }
}

export default Blogs;