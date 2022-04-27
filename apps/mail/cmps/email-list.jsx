import { MailPreview } from './email-preview.jsx';




export function EmailList({mails}) {
	return (
		<div className='mail-list'>
			<div className ="header-container">
			  <h5 >Star Mail</h5 >
			  <h5  >From</h5 >
			  <h5>Subject</h5 >
			  <h5  >Message</h5 >
			  <h5  >Labels</h5 >
			  <h5  >Date</h5 >
			  <h5 >Actions</h5 >
			</div>
			  <section className="email-list flex">
        {mails.map(email => <div><MailPreview email={email} key={email.id}/></div>)}
    </section>


	</div>

			  
	  )
}
