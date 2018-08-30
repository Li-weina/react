import React, { Component } from 'react'

export default class Add extends Component {
    input = React.createRef()
    handleSumbit=(e)=>{
        e.preventDefault();
        let value = this.input.current.value;
        let list = JSON.parse(localStorage.getItem('list')) || [];
        list.push({id:list.length+1,userName:value})
        localStorage.setItem('list',JSON.stringify(list))

    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSumbit}>
            <label htmlFor="">用户名</label>
            <input type="text" ref={this.input}/>
            <button type='submit'>提交</button>
        </form>
      </div>
    )
  }
}
