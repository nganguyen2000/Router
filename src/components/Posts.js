import React, { component, Component } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
class Posts extends Component {
  // constructor(){
  //     super();
  //     this.posts = [
  //         {id:1, title:"A"},
  //         {id:2, title:"B"},
  //         {id:3,title:"C"}
  //     ]
  // }

  constructor() {
    super();
    this.state = {
      posts: [],
    };
    this.getData();
  }
  getData() {
    fetch("http://127.0.0.1:8000/api/post").then((response) => {
      response.json().then((data) => {
       // console.log(data);
        this.updateUI(data);
      });
    });
  }

  updateUI(data) {
    this.setState({
      posts: data,
    });
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map((item) => (
          <div>
            <h2>{item.id}</h2>
            <p>{item.title}</p>
            <Link to={"/posts/" + item.id}>Detail</Link>
          </div>
        ))}
      </div>
    );
  }
}
export default Posts;
