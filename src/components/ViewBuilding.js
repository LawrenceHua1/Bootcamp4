import React from 'react';


class ViewBuilding extends React.Component {

	render(){
	const {data, id} = this.props;

	const buildingData = data.filter(directory => {return directory.id === id})[0]

	let out = '';
	

	
	if(buildingData){

		out = 
		<div>
			<tr>
				<row>
					<b>
						Name: <t></t>
					</b>
					{buildingData.name}
				</row>
			</tr>
			<tr>
				<row>
					<b>
						Code: <t></t>
					</b>
					{buildingData.code}
				</row>
			</tr>
			<tr>
				<row>
					<b>
						Address: <t></t>
					</b>
					{buildingData.address}
				</row>
			</tr>
			<tr>
				<row>
					<b>
						Longitude/Latitude coordinates: <t></t>
					</b>
					{buildingData.coordinates && buildingData.coordinates.longitude + ' ' + buildingData.coordinates.latitude}
				</row>
			</tr>
		</div>
		

	}else{
		out = <i>Click on a name to get more information <br/><br/>
		To add buildings, input proper information located under scroll List and click the "Add Building" button<br/><br/>
    	To remove buildings, click desired building to remove and click the "Remove Selected Building" button
		</i>
		
	} 
	
	//if(buildingData.coordinates ==)
	// if(buildingData.coordinates == undefined){
	// 	buildingData.coordinates.longitude = 'NA'
	// 	buildingData.coordinates.latitude = 'NA'
	// }
	return(

				<row>
					<b>
						{out}
					</b>
					
				</row>
		
	);
	}

}
export default ViewBuilding 