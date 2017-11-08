import React from 'react';

class ResultTable extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const trows = []
    this.props.rows && this.props.rows.forEach((row) => {
      console.log(row)

      trows.push(<tr>
        <td><i className={'fa ' + row.type + ' fa-2x'} aria-hidden="true"></i></td>
        <td><i className={'fa ' + row.dev.icon + ' fa-2x'} aria-hidden="true"></i></td>
        <td>{row.dev.venue}</td>
        <td>{row.ts}</td>
        </tr>)
    })


    return (
      <table>
        <thead>
        <tr>
          <th>Retning</th>
          <th>Tittel</th>
          <th>Lokasjon</th>
          </tr>
        </thead>
          <tbody>{trows}
        </tbody>
      </table>
    )
  }
}

export default ResultTable
