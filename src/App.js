import './App.css'
import React, { Component } from 'react'
import MarkdownInput from './Components/MarkdownInput/MarkdownInput';
import MarkdownPreview from './Components/MarkdownPreview/MarkdownPreview';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputContent: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputContent: e.target.value
    })
  }

  render() {
    return (
      <div className='app-container'>
        <header className='app-header'>Markdown Previewer</header>
        <div className='component-container'>
          <div className='child-container'><MarkdownInput  handleChange={this.handleChange}/></div>
          <div className='child-container markdown-preview'><MarkdownPreview  input={this.state.inputContent}/></div>
        </div>
      </div>
    )
  }
}

export default App
