export const itemSource = {
  beginDrag(props) {
    const { id, index } = props

    return {
      id,
      index
    }
  }
}
