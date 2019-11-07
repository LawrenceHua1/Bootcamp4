import React, {Component} from 'react';


class RemoveBuilding extends React.Component{

    


    render(){
        const{removeBuilding, data, id} = this.props
        const selected = data.filter(directory => {return directory.id === id})[0]

    return(

			<button class="button" onClick={() => { 
					removeBuilding(selected.id)}}> Remove Selected Building</button>
      
    )


    }
}

export default RemoveBuilding