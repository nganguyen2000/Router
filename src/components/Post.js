import React, {component, Component} from 'react';
import {withRouter} from 'react-router';
class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
        let id = this.props.match.params.id;
        this.getDeatail(id);
    }
    
    getDeatail(id){
        fetch("http://127.0.0.1:8000/api/post/" + id)
                .then(response => {
                        response.json().then((data) =>  {
                                console.log(data);
                this.updateUI(data);
                        });
        });
    }
    updateUI(data) {
        this.setState({
          posts: data,
        });
      }
    render(){
        return(
            <div>
                 <h1>Posts</h1>
                 {this.state.posts.map(item=>
                 <div>
                     <h2>{item.id}</h2>
                     <p>{item.title}</p>
                     <p>Status:{item.status}</p>
                    
                 </div>
                    )}
            </div>
            
        );
    }
}
export default withRouter(Post);


