// Write your code here.

import FaqItem from '../FaqItem/index'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="faqs-app-container">
      <ul className="faqs-list-container">
        <h1 className="main-heading">FAQs</h1>
        {faqsList.map(eachFaq => (
          <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
        ))}
      </ul>
    </div>
  )
}

export default Faqs
