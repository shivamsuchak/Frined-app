import React, { Component } from 'react';
import CardList from './CardList';
import { person } from './person';
import SearchBox from './SearchBox';
const state = {
	person: person,
	Searchfield: ''
}

class App extends Component {  
	render(){
	return (
		<div className="tc">
		<h1> Friends-APp </h1>
		<SearchBox />
		<CardList person={person}/>
		</div>
		);
}


export defualt App;