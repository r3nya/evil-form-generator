import { createSelector } from 'reselect'
import { newForm, notifications } from 'selectors'

export const newFormSelector = createSelector(
  newForm,
  notifications,
  (form, notifications) => ({ ...form, ...notifications })
)
