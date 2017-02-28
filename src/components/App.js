import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CatList from './categories'
import ShowHideBtn from './showhidebtn'
import TabList from './tabs'
import AddForm from './addform'
import * as catlistActions from '../actions/categories'
import * as subcatlistActions from '../actions/subcategories'
import * as tablistActions from '../actions/tabs'

class App extends Component {
	
	render() {
		let subcat_id = (this.props.subcatL.current < 0) ? -1 : this.props.subcatL.data[this.props.subcatL.current].id
		let tabs = 	this.props.tabL.data.filter((tab)=>{return tab.subcat_id == subcat_id})
		//index of selected tab
		let selTab = (this.props.subcatL.currentTab >= 0 && tabs.length > 0) ? tabs.findIndex((item)=>{return item.id == this.props.subcatL.currentTab}) : 0;
		return (
			<div>
				{this.props.catL.isVisible ?  
					<CatList data={this.props.catL.data} subs={this.props.subcatL.data} currentSubID={subcat_id} openCat={this.props.catlistActions.openCat} openSubCat={this.props.subcatlistActions.openSubCat}/>:null
				}
				<div id='mainpanel' className={(!this.props.catL.isVisible) ? 'mainpnl100' : null}>
					<div id='tabheader'>
						<ShowHideBtn onVisible={this.props.catlistActions.showhide}/>
						{subcat_id >= 0 ? <TabList tabs={tabs} openTab={this.props.subcatlistActions.openTab} selTabID={this.props.subcatL.currentTab} addingTab={this.props.tablistActions.addingTab}/> : null}
					</div>
					{tabs.length > 0 ? 
						<div id='content'>
							<div id='subcat'>{this.props.subcatL.data[this.props.subcatL.current].name}</div>
							<div id='tb'>{tabs[selTab].name}</div>
							<div id='text'>{tabs[selTab].text}</div>
						</div> : null
					}
				</div>
				{this.props.tabL.adding ? <AddForm cancel={this.props.tablistActions.cancel} addTab={this.props.tablistActions.addTab} subcatID={subcat_id}/> : null}
			</div>
		)
  }
}

function mapStateToProps (state) {
  return {
    catL: state.catlist,
	subcatL: state.subcatlist,
	tabL: state.tablist
  }
}

function mapDispatchToProps(dispatch) {
  return {
    catlistActions: bindActionCreators(catlistActions, dispatch),
	subcatlistActions: bindActionCreators(subcatlistActions, dispatch),
	tablistActions: bindActionCreators(tablistActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)