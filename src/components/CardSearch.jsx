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
    console.log('TODO: Do something with the data')
    console.log(data) 
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
        <form>
          <input onChange={(e) => this.handleCardNameChange(e)} value={cardName}></input>
          <button type="submit" onClick={(e) => this.handleSubmit(e)}>SEARCH</button>
        </form>
      </div>
    )
  }
}

export default CardSearch
