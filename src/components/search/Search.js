import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import axios from 'axios'
import ImageResults from '../imageresuts/ImageResults'

export class Search extends Component {
  state = {
    searchText: '',
    amount: 5,
    apiUrl : 'https://pixabay.com/api',
    apiKey : '17471215-c2bac24059ae338829222fa48',
    images: []
  }

  changeText = (e) => {
    const val = e.target.value
    this.setState({
      [e.target.name]: val
    }, () => {
      if(val === ''){
        this.setState({images: []})
      }else{
        axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
        .then(res => this.setState({images: res.data.hits}))
        .catch(err => console.log(err))
      }
    })
  }

  amountChange = (e, index, value) => {
    this.setState({
      amount: value
    })
  }
  render() {
    console.log(this.state.images)
    return (
      <div>
        
        <SelectField name="amount" floatingLabelText="Amount" value={this.state.amount} onChange={this.amountChange}>
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={20} primaryText="20" />
        </SelectField> <br />
        <TextField floatingLabelText="Search Images Here" name="searchText" value={this.state.searchText} onChange={this.changeText}></TextField> <br />
        {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}
      </div>
    )
  }
}

export default Search
