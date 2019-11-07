import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      buildingData: this.props.data
    }; 
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({filterText:value})
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({selectedBuilding:id})
  }

  add(name, code, address, coordinateslat, coordinateslong){
    const info = this.props.data;
   info.push({id: info[info.length-1].id + 1, name:name, code: code, address: address, coordinates: {latitude: coordinateslat, longitude: coordinateslong}})
    this.setState({
      data: info
    })
  }

  remove(id){
    let index = this.props.data.findIndex(q => q.id === id);
    const Data1 = this.props.data;
    const Data2 = Data1.splice(index,1);
    this.setState({
      data: Data2
    })
    console.log(index);

  }
  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search filterText={this.state.filterText} 
        filterUpdate ={this.filterUpdate.bind(this)}/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText = {this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
       data = {this.props.data}
       id = {this.state.selectedBuilding}
       selectedUpdate ={this.selectedUpdate.bind(this)}  
          />
            </div>
              <p><AddBuilding
              add = {this.add.bind(this)}/></p>
              <RemoveBuilding
                id = {this.state.selectedBuilding}
                chosen={this.selectedUpdate.bind(this)}
                removeBuilding={this.remove.bind(this)}
                data = {this.props.data}
              />
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
