import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodoItem extends Component {

    getStyle= () => {
        return{
            background: '#f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

 

    render() {
        const { id , title } = this.props.todo;
        return (
            <div style = {this.getStyle()} >
                <p>
                    <input type = "checkbox" onChange ={this.props.markComplete.bind(this,id) } /> {'  '}
                    { title }

                    <button onClick = {this.props.delTodo.bind(this,id)} style = {btnStyle} >X</button>
                </p>
            </div>
        );
    }
}




//proptypes
TodoItem.propType = {
    todos: PropTypes.array.isRequired
}


const btnStyle = {
    background: '#ff0000',
    color:'#fff',
    border: 'none',
    padding: '1px 3px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}