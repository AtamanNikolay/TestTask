export const OPEN_SUBCAT = 'OPEN_SUBCAT'
export const OPEN_TAB = 'OPEN_TAB'

export function openSubCat(param) {

  return {
    type: OPEN_SUBCAT,
    payload: param
  }

}

export function openTab(tabID) {

  return {
    type: OPEN_TAB,
    payload: tabID
  }

}