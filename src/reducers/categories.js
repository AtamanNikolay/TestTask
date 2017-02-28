import {OPEN_CAT, SHOWHIDE} from '../actions/categories'

const initialState = {
  isVisible: true,
  current: -1,
  data:  [
			{
				name: 'VIDEO SERVICES',
				id: 1,
				isOpen: false
			},
			{
				name: 'AUDIO SERVICES',
				id: 2,
				isOpen: false
			},
			{
				name: 'BROADBAND SERVICES',
				id: 3,
				isOpen: false
			}
		]
};

export default function catlist(state = initialState, action) {
	switch (action.type) {
		case OPEN_CAT:
			let index = state.data.findIndex((d)=>{return d.id == action.payload})
			if (index == -1) return state
			if (state.current >= 0)
				state.data[state.current].isOpen = false
			state.current = index
			state.data[index].isOpen = true
			return { ...state, data: state.data }
					
		case SHOWHIDE:
			return {...state, isVisible: !state.isVisible}
		
		default:
			return state;
	}
}