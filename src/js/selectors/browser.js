import { createSelector } from 'reselect'
import { browser } from 'selectors'

export const browserSelector = createSelector(
  browser,
  data => {
    const { choices, questions, ...rest } = data

    if (questions && questions.length) {
      const newQ = questions.reduce((data, item) => {
        data.push({
          ...item,
          choices: choices.filter(choice => choice.questionId === item.id)
        })
        return data
      }, [])

      return {
        questions: newQ,
        ...rest
      }
    }

    return {
      questions,
      ...rest
    }
  }

)
