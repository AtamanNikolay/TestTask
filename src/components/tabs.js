import React, { PropTypes, Component } from 'react'

export default class TabList extends Component {

	openTab(e){
		if (+e.target.id == this.props.selTabID) return
		this.props.openTab(+e.target.id)
	}
	
	addingTab(e){
		this.props.addingTab()
	}
	
	render() {
		let selID = (this.props.selTabID < 0 && this.props.tabs.length > 0) ? this.props.tabs[0].id : this.props.selTabID
		return (
			<div id='tabs'>
				{this.props.tabs.map((tab, i) => <div id={tab.id} key={i} onClick={::this.openTab} className={(tab.id == selID) ? 'tab sel_tab' : 'tab'}>{tab.name}</div>)}
				<div className='_btn' onClick={::this.addingTab}>+</div>
			</div>
		)
  }
}

TabList.propTypes={
	tabs: PropTypes.array,
	selTabID: PropTypes.number,
	openTab: PropTypes.func,
	addingTab: PropTypes.func
}