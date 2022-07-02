import React, {Component} from 'react';
import ComponentService from '../services/ComponentService';

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            statesData : []
        }
    }

    componentDidMount(){
        ComponentService.getAllStates().then((res) =>{
            this.setState({statesData:res.data.data[0].stateData});
        });
    }

    render(){
        return(
            <div>
                <div>
                    <button type="button" class="btn btn-primary">Primary</button>
                </div>
                <div>
                    <h2 className="text-center"> State Data</h2>
                    <table  className ="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Capital</th>
                                <th>Language</th>
                                <th>CM</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.statesData.map(
                                    statesData =>
                                    <tr key = {statesData.id}>
                                        <td>{statesData.name}</td>
                                        <td>{statesData.capital}</td>
                                        <td>{statesData.language}</td>
                                        <td>{statesData.cm}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>   
                </div>

            </div>
        );
    }
}

export default Main;