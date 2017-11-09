import React from 'react';
import SearchBox from './searchbox';
import ResultTable from './ResultTable'

import { translate, translateHistory } from './LocationHandler.js';

class BookTracker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {title: '', venue: '', handledBy: ''}
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    const keyCode = event.which || event.keyCode
    if (keyCode === 13) {
      console.log("endring! " + event.target.value)
      // only 14 first chars
      this.getData()
    }
  }

  getData() {
    return fetch('https://rfidscanner.deichman.no/json/30119116657271')
      .then((response) => response.json())
      .then((json) => {
        console.log(json.entry)
        const btitle = json.entry.title
        this.setState({title: btitle})
        const info = translate(json.entry)
        const history = translateHistory(json.history)
        this.setState({
          venue: info.venue, handledBy: info.handledBy, ts: info.ts, rows: history
        })

      })
  }

  render() {
    return (
      <div>
        <SearchBox onInputChange = {this.handleInput} />
        <h2>Tittel: {this.state.title}</h2>
        {this.state.venue} {this.state.handledBy} {this.state.ts}
        <ResultTable rows={this.state.rows} />
      </div>
    )
  }

}

export default BookTracker
