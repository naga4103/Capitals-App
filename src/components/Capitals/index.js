import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChangeInput = event => {
    console.log(event.target.value)

    const results = countryAndCapitalsList.filter(
      eachList => eachList.id === event.target.value,
    )
    console.log(results)
    this.setState({activeId: results[0].id})
  }

  getOutput = () => {
    const {activeId} = this.state

    console.log(activeId)

    const result = countryAndCapitalsList.filter(
      eachList => activeId === eachList.id,
    )
    console.log(result[0].country)
    return result[0].country
  }

  render() {
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <form>
            <select
              className="select-container"
              id="capitals"
              onChange={this.onChangeInput}
            >
              {countryAndCapitalsList.map(eachList => (
                <option value={eachList.id} key={eachList.id}>
                  {eachList.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capitals">is capital of which country?</label>
          </form>

          <p className="para">{this.getOutput()}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
