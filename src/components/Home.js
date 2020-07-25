import React, {component, Component} from 'react';

class Home extends Component{
    render(){
        return(
            <div>
                 <h1>Home</h1>
                <a href="/about">About</a><br/>
                <a href="/post">Post</a><br/>
                <a href="/posts">Posts</a>
                
            </div>
           
        );
    }
}
export default Home;