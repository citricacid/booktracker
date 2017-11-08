import React from 'react';

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: props.name, value: '03010894252003' }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    const keyCode = event.which || event.keyCode
    if (keyCode === 13) {
      console.log("endring! " + event.target.value)
      //this.props.
    }

  }

  render() {
    return (
      <fieldset>
        <legend>Kode:</legend>
        <input type="text" onKeyPress={this.props.onInputChange} />
        <button type="button">OK</button>
      </fieldset>
    )
  }
}

export default SearchBox
