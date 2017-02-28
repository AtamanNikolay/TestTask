export const ADDING_TAB = 'ADDING_TAB'
export const ADD_TAB = 'ADD_TAB'
export const CANCEL_TAB = 'CANCEL_TAB'

export function addingTab() {

  return {
    type: ADDING_TAB
  }

}

export function addTab(newTab) {

  return {
    type: ADD_TAB,
	payload: newTab
  }

}

export function cancel() {

  return {
    type: CANCEL_TAB
  }

}