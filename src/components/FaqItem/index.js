// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isShow: false}

  onToggleBtn = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  render() {
    const {isShow} = this.state
    const {faqDetails} = this.props
    const {id, questionText, answerText} = faqDetails
    const imgShowUrl = isShow
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const showImgAlt = isShow ? 'minus' : 'plus'

    return (
      <li className="faq-item-card">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button className="show-btn" type="button" onClick={this.onToggleBtn}>
            <img src={imgShowUrl} alt={showImgAlt} />
          </button>
        </div>
        {isShow && (
          <div className="answer-container">
            <hr className="hr-line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
