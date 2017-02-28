export const OPEN_CAT = 'OPEN_CAT'
export const SHOWHIDE = 'SHOWHIDE'

export function openCat(catID) {

  return {
    type: OPEN_CAT,
    payload: catID
  }

}

export function showhide() {

  return {
    type: SHOWHIDE
  }

}