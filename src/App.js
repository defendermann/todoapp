import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)

    this.state = {
      item : '',
      list : []
    }
  }

  handleChange(key, val){
    this.setState({
      [key] : val
    })
  }

  addItem(){
    const newItem = {
      id : Math.random() + 1,
      value : this.state.newItem.slice()
    };

    const list = [...this.state.list]
    list.push(newItem)

    this.state.newItem = ''

    this.setState({
      list : list
    })
  }

  deleteItem(id){
    const delList = this.state.list.filter(it => it.id != id)

    this.setState({
      list: delList
    })
  }

  render(){
    return(
      <div className='App'>
        <input
        type='text'
        placeholder='enter item'
        value={this.state.newItem}
        onChange={e => this.handleChange('newItem', e.target.value)}
        />
        <button onClick={this.addItem}>Add Item</button>
        
      <ul>
        {this.state.list.map(item => {
          return(
            <div>
              <p key={item.id}>{item.value}</p>
              <button onClick={() => {this.deleteItem(item.id)}}>
                Delete Item
              </button>
            </div>
          )
          })}
      </ul>
      </div>

    )
  }
}

export default App;
