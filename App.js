import React, { Component } from 'react';
import axios from "axios"
import Input from "./Components/Input/input"
import List from "./Components/List/list"
import Chip from "./Components/Chip/chip"
import './App.css';

class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      search: "",
      List: [],
      error: "",
      matchEmails: [],
      chip: []
    }
  }

  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=1").then(response => {
      this.setState({
        List: response.data.data
      })
    }).catch(error => {
      this.setState({
        error
      })
      new Error(error)
    })
  }

  onSearch = (e) => {
    const { List } = this.state
    this.setState({
      search: e.target.value
    }, () => {
      const { search } = this.state
      if (search.length > 0 && search.length <= 6) {
        const matchEmails = List.filter(name => {
          return name.first_name.toLowerCase().includes(search) || name.email.toLowerCase().includes(search)
        })
        this.setState({
          matchEmails
        })
      }
    })
  }

  selectChip = (item) => {
    this.setState({
      chip: [...new Set([...this.state.chip, ...[item]])],
      matchEmails: [],
      search: ""
    })
  }

  remove = (id) => {
    const { chip } = this.state
    const removeChip = chip.filter(item => {
      return item.id !== id
    })

    this.setState({
      chip: removeChip
    })
  }

  render() {
    const { search, matchEmails, chip } = this.state
    return (
      <React.Fragment>
      <div className="container">
        <div className="chipbox">
          <Chip remove={this.remove} chip={chip}></Chip>
          <Input onSearch={this.onSearch} searchString={search}></Input>
        </div>
      </div>
        <div className="list">
        <List selectChip={this.selectChip} list={matchEmails}></List>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
