import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export class Opportunities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "Make", field: "make", width: 100 },
        { headerName: "Model", field: "model", width: 100 },
        { headerName: "Price", field: "price", width: 100 }],
      rowData: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }]
    }
  }

  render() {
    return (
      <div className="ag-theme-alpine" 
           style={ {height: '200px', width: '100%'} }>
        <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}
