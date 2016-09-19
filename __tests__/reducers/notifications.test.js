import { default as reducer } from 'reducers/notifications'
import * as types from 'constants/ActionTypes'

const initialState = []

describe('notifications reducer', () => {
  it('testing initial state', () => {
    expect(reducer(undefined, {
      type: 'bad type'
    })).toEqual(initialState)
  })

  it('add new notification', () => {
    const newNotification = {
      type: 'type of notification',
      message: 'big message'
    }

    expect(reducer(undefined, {
      type: types.NEW_NOTIFICATION,
      payload: newNotification
    })).toEqual([
      ...newNotification
    ])
  })

  it('clear notifications', () => {
    expect(reducer(undefined, {
      type: types.CLEAR_NOTIFICATIONS
    })).toEqual(initialState)
  })

  it('save form success', () => {
    expect(reducer(undefined, {
      type: types.SAVE_FORM_SUCCESS
    })).toEqual(initialState)
  })

  it('clean fields', () => {
    expect(reducer(undefined, {
      type: types.CLEAN_FIELDS
    })).toEqual(initialState)
  })

  it('get form success', () => {
    expect(reducer(undefined, {
      type: types.GET_FORM_SUCCESS
    })).toEqual(initialState)
  })
})
