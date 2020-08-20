import React from 'react';

const Card = (props) => {
	const { name, email } = props;
	return(
		<div className='bg-yellow grow dib br4 pa3 ma2 shadow-5 tc db mb mw-100 bw2'> 
			<img alt='person' src={`https://robohash.org/${name}?200*200`} />
				<div>
					<h2>{ name } </h2>
					<p> { email }   </p>
				</div>
		</div>			
		);
}


export default Card;