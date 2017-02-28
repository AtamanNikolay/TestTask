import {OPEN_SUBCAT, OPEN_TAB} from '../actions/subcategories'

const initialState = {
  currentTab: -1, //Tab ID
  current: -1,
  data:  [
			{
				name: 'Digital',
				id: 11,
				cat_id: 1
			},
			{
				name: 'Linear',
				id: 12,
				cat_id: 1
			},
			{
				name: 'Recording',
				id: 13,
				cat_id: 1
			},
			{
				name: 'Digital',
				id: 14,
				cat_id: 2
			},
			{
				name: 'Linear',
				id: 15,
				cat_id: 2
			},
			{
				name: 'Recording',
				id: 16,
				cat_id: 2
			},
			{
				name: 'Digital',
				id: 17,
				cat_id: 3
			},
			{
				name: 'Linear',
				id: 18,
				cat_id: 3
			},
			{
				name: 'Recording',
				id: 19,
				cat_id: 3
			}
		]
};

export default function subcatlist(state = initialState, action) {
	switch (action.type) {
		case OPEN_SUBCAT:
			let index = state.data.findIndex((d)=>{return d.id == action.payload})
			if (index == -1) return state
			return { ...state, current: index, currentTab: -1 }
		
		case OPEN_TAB:
			return { ...state, currentTab: action.payload }
		
		default:
			return state;
	}
}