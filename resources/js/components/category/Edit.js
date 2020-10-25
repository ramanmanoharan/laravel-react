import React, { Component } from 'react';
import axios from 'axios';


export default class Edit extends Component{
    constructor(props)
    {
        super(props);
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.state={
            category_name:''
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:8000/Category/edit/'+this.props.match.params.id)
        .then(response=>{
            this.setState({category_name:response.data.name});
        });
    }
    onChangeCategoryName(e){
        this.setState({
            category_name:e.target.value
        })
    }
    onSubmit(e)
    {
        e.preventDefault();
        const category={
            category_name: this.state.category_name
        }
        axios.put('http://localhost:8000/Category/update/'+this.props.match.params.id, category)
        .then(res=>Console.log(res.data));

    }
    render(){
	return(
		<div>
            <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Category Name</label>
                        <input type="text" className="form-control" value={this.state.category_name}  id="category_name" onChange={this.onChangeCategoryName} aria-describedby="emailHelp"/>
                    </div>
    
                
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
		</div>

		);
}
}

