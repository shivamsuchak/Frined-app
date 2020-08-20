import React from 'react';
import Card from './Card';

const CardList = ({ person }) => {
	return (
	<div>
		{
	   		person.map((user,i) =>{
				return (	
				<Card 
					key={i} 
					id={person[i].id} 
					name={person[i].name} 
					email={person[i].email} 
					/>
			);
		})
	}
	</div>	
	);
}

export default CardList;