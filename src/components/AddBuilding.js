import React, {Component} from 'react';


class AddBuilding extends React.Component{

 



    render(){
        const {add} = this.props;


return(

<form className = "AddBuilding" onSubmit = {event => {

    event.preventDefault()
    this.refs.name.value = ''
    this.refs.code.value = ''
    this.refs.address.value = ''
    this.refs.latitude.value = ''
    this.refs.longitude.value = ''
}}>

<padding>
<input ref="name" placeholder="Name" style = {{width :"100%",padding:10 }}/> <t/><br/>

<input ref="code" placeholder="Code" style = {{width :"100%",padding:10}}/> <t/>

<input ref="address" placeholder="Address" style = {{width :"100%",padding:10}}/> <t/>

<input ref="latitude" placeholder="Coordinates (Latitude)"style = {{width :"100%",padding:10}}/><t/>

<input ref="longitude" placeholder="Coordinates (Longitude)"style = {{width :"100%",padding:10}}/>
</padding><br/>

<button onClick={() => { 


add(this.refs.name.value, this.refs.code.value, this.refs.address.value, this.refs.latitude.value, this.refs.longitude.value)}}> Add Building</button>
	
 				
  

</form>


);

    }
}

export default AddBuilding;