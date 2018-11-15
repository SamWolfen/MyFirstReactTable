import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            
                {
                  Header: "Unique ID",
                  accessor: "id"
                },

                {
                  Header: "Make",
                  accessor: "make_id"
                },

                {
                  Header: "Model",
                  accessor: "model_id"
                },

                {
                  Header: "Serial",
                  accessor: "serial"
                },

                {
                  Header: "Category",
                  accessor: "category_id"
                }, 
                {
                  Header: "Photo",
                  accessor: "photo"
                },
            {
              Header: "Name",
              accessor: "name"
            }, 
            {
              Header: "Description",
              accessor: "description"
            },
            {
              Header: "Owner",
              accessor: "owner_id"
            }, 
            {
              Header: "Borrower",
              accessor: "borrower_id"
            },
            {
              Header: "Location",
              accessor: "location_id"
            },
            {
              Header: "Status",
              accessor: "status_id"
            },
            {
              Header: "Barcode",
              accessor: "barcode"
            },
            {
              Header: "Reciept",
              accessor: "reciept"
            },
            {
              Header: "Accessories",
              accessor: "accessories"
            },
            {
              Header: "Purchase Date",
              accessor: "purchase_date"
            },
             {
                  Header: "OS Version",
                  accessor: "os_version"
              },
            {
              Header: "Notes",
              accessor: "notes"
            },
            {
              Header: "Documentation",
              accessor: "documentation"
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
