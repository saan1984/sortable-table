import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({rows: data});
        });
    }
    render() {
        const data = this.state.rows;
        const columns = [{
            Header: 'Id',
            accessor: 'id'
        }, {
            Header: 'UserId',
            accessor: 'userId'
        }, {
            Header: 'Body',
            accessor: 'body'
        }, {
            Header: 'Title',
            accessor: 'title'
        }];
        return (
            <div className="App">
                <ReactTable
                    data={data}
                    columns={columns}
                />
            </div>
        );
    }
}

export default App;
