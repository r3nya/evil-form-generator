import { createSelector } from 'reselect'
import { newForm, notifications } from 'selectors'

export const newFormSelector = createSelector(
  newForm,
  notifications,
  (form, notifications) => {
    const { choices, extraData, questions } = form

    if (questions.length) {
      const data = questions.reduce((data, item) => {
        data.push({
          ...item,
          choices: choices.filter(choice => choice.questionId === item.id)
        })
        return data
      }, [])

      return {
        questions: data,
        ...extraData,
        ...notifications
      }
    }

    return {
      questions,
      ...extraData,
      ...notifications
    }
  }

)
