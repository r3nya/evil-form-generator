import { default as reducer } from 'reducers/browser'
import * as types from 'constants/ActionTypes'

const initialState = {
  loading: false,
  data: []
}

describe('browser reducer', () => {
  it('testing initial state', () => {
    expect(reducer(undefined, {
      type: 'bad type'
    })).toEqual(initialState)
  })

  // it('fetch item', () => {
  //   expect(reducer(undefined, {
  //     type: types.FETCH_ITEM
  //   })).toEqual({
  //     ...initialState,
  //     loading: true
  //   })
  // })

  it('fetch item success status', () => {
    expect(reducer(undefined, {
      type: types.FETCH_ITEM_SUCCESS,
      payload: {}
    })).toEqual({
      ...initialState
    })
  })

  it('fetch item error status', () => {
    expect(reducer(undefined, {
      type: types.FETCH_ITEM_ERROR,
    })).toEqual({
      ...initialState,
      loading: false
    })
  })
})
