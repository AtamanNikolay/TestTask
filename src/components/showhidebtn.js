import React, { PropTypes, Component } from 'react'

export default class ShowHideBtn extends Component {

	onClick(e) {
		this.props.onVisible()
	}	
	
	render() {
		return (
			<div id='sh_btn' className='_btn' onClick={::this.onClick}>&#x2980;</div>
		)
  }
}