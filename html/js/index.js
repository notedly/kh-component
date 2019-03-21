import React , { Component } from 'react' ;
import ReactDOM , { render } from 'react-dom' ;
import { KhComponent } from './ui/common' ;

console.log( 'index.js load' , KhComponent ) ;

window.addEventListener('load', () => {

	let mainTab = KhComponent.tabmenu( document.querySelector('.tab') , {
		initTab : 0 ,	// startNum : 0 , endNum : length - 1
		moveBtn : true ,
	} ) ;

	document.querySelector('.btnOutsider').addEventListener('click', () => {
		mainTab.active( 1 ) ;
	})

}) ;