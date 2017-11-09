import React from 'react';

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: props.name, value: '03010894252003' }
    this.state = {data: []}

    this.foo = this.foo.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUp = this.handleUp.bind(this)
  }

  handleSubmit(event) {
    const keyCode = event.which || event.keyCode
    if (keyCode === 13) {
      console.log("endring! " + event.target.value)
      //this.props.
    }
  }

  handleUp(event) {
    console.log(event.target.value)
    return fetch('https://rfidscanner.deichman.no/json/complete/' + event.target.value)
      .then((response) => response.json())
      .then((json) => {
          json.results && this.setState({data: json.results})
      })

  }

  foo(event) {
    console.log("hai!")
  }


  render() {
    return (
      <fieldset>
        <legend>Kode:</legend>
        <input list="barcodes" type="text" onInput={this.foo}  onKeyUp={this.handleUp} onKeyPress={this.props.onInputChange}  />
        <datalist id="barcodes">
         {this.state.data.map((item) => <option value={item.barcode + ' ' + item.title} data-barcode={item.barcode} />)}
        </datalist>
        <button type="button">OK</button>
      </fieldset>
    )
  }
}

export default SearchBox
