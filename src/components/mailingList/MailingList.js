import './mailingList.css'
export default function MailingList() {
  return (
    <div className='mailing-list'>
      <h1 className='mailing-title'>
        save time, save money
      </h1>
      <span className='mailing-body'>
          sign up for free
      </span>
      <div className='mailing-input'>
        <input type='text' placeholder='your email' />
        <button>subcriber</button>
      </div>
    </div>
  )
}
