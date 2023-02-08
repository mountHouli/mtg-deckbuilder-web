import React from 'react'

import config from '../config/config'

const { scryfallCardNameUrl } = config

class CardSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      cardName: '',
      cardData: ''
    }
  }

  async handleSubmit(e) {
    e.preventDefault()
    const { cardName } = this.state

    const url = `${scryfallCardNameUrl}?exact=${cardName}`

    const response = await fetch(url)
    const data = await response.json()

    this.setState({
      cardName,
      cardData: JSON.stringify(data, null, 2)
    })
  }

  handleCardNameChange(e) {
    this.setState({
      cardName: e.target.value
    })
  }

  render() {
    const { cardName, cardData } = this.state

    return (
      <div className="card-search-container">
        <form className="card-search-form">
          <input onChange={(e) => this.handleCardNameChange(e)} value={cardName} className='card-search-input' placeholder="Card name" />
          <button type="submit" onClick={(e) => this.handleSubmit(e)} className='card-search-submit-button'>Look it up!</button>
        </form>
        <textarea className="card-data-textarea" value={cardData}></textarea>
      </div>
    )
  }
}

export default CardSearch
