import {OPEN_TAB, ADDING_TAB, ADD_TAB, CANCEL_TAB} from '../actions/tabs'

const initialState = {
	adding: false, //true - adding tab
	data:[
	{
		id: 111,
		name: 'Tab 1',
		text: 'Tab content',
		subcat_id: 11
	},
	{
		id: 112,
		name: 'Tab 2',
		text: 'Tab content',
		subcat_id: 11
	},
	{
		id: 113,
		name: 'Tab 3',
		text: 'Tab content',
		subcat_id: 11
	}
  ]
}

export default function tablist(state = initialState, action) {
	switch (action.type) {
		case ADDING_TAB:
			return {...state, adding: true}
		
		case ADD_TAB:
			let newTab={id: -1, subcat_id: action.payload.subcatID, name: (action.payload.name === '')? `New Tab ${state.data.length+1}` : action.payload.name, text: action.payload.text}
			newTab.id = state.data.length > 0 ? Math.max(...state.data.map((item)=>{return item.id})) + 1 : 1;
			state.data.push(newTab)
			return {...state, adding: false}
		
		case CANCEL_TAB:
			return {...state, adding: false}
		
		default:
			return state
	}
}