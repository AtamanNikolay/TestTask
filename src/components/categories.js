import React, { PropTypes, Component } from 'react'

export default class CatList extends Component {

   onClick(e) {
	   if(!e.target.id) return
	   this.props.openCat(e.target.id)
   }
	subClick(e){
		if (+e.target.id == this.props.currentSubID) return;
		e.stopPropagation()
		this.props.openSubCat(e.target.id)
	}
	
	renderSubs(cat){
		if (!cat.isOpen) return ('')
		let subs=this.props.subs.filter((item)=>{return item.cat_id == cat.id})
		return(
			<div className='sub_cat'>
				{subs.map((subcat, i) => <div id={subcat.id} key={i} onClick={::this.subClick} className={subcat.id == this.props.currentSubID ? 'sel_subcat' : null}>{subcat.name}</div>)}
			</div>
		)
	}
	
	render() {
		return (
			<div id='sidebar'>
				{this.props.data.map((cat, i) => <div id={cat.id} key={i} onClick={::this.onClick}>{cat.name}<span className={cat.isOpen ? 'categorie_open' : 'categorie'}> </span>{this.renderSubs(cat)}</div>)}
			</div>
		)
  }
}

CatList.propTypes={
	data: PropTypes.array,
	subs: PropTypes.array,
	openCat: PropTypes.func,
	currentSubID: PropTypes.number
}