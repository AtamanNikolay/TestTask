import React, { PropTypes, Component } from 'react'

export default class AddForm extends Component {
	
	addTab(e){
		const name = this.refs.tabname.value.trim()
		const text = this.refs.tabtext.value.trim()
		this.props.addTab({'name': name, 'text': text, 'subcatID': this.props.subcatID})
	}
	cancel(e){
		this.props.cancel()
	}
	
	render() {
		return (
			<div className='frm_bckg'>
				<div className='frm'>
					<div className='tabname'>Tab Name: <input type = 'text' ref = 'tabname' placeholder='New Tab'/></div>
					<div className='tabtext'>Tab Text: <textarea ref='tabtext' rows='20'></textarea></div>
					<div className='frmbtns'>
						<button onClick={::this.addTab}>Add</button>
						<button onClick={::this.cancel}>Cancel</button>
					</div>
				</div>
			</div>
		)
  }
}

AddForm.PropTypes={
	addTab: PropTypes.func,
	cancel: PropTypes.func,
	subcatID: PropTypes.number
}