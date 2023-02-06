import React from 'react'

class CardSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      cardName: '',
      cardData: ''
    }
  }

  handleClick() {
    console.log('TODO: Write the click handler!')
  }

  handleCardNameChange(e) {
    this.setState({
      cardName: e.target.value
    })
  }

  render() {
    const { cardName, cardData } = this.state

    return (
      <div>
        <input onChange={(e) => this.handleCardNameChange(e)} value={cardName}></input>
        <button onClick={() => this.handleClick()}>SEARCH</button>
      </div>
    )
  }
}

export default CardSearch
