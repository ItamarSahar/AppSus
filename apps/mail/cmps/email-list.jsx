import { MailPreview } from './email-preview.jsx';



export function EmailList({  mails,
	togglePreview,
	onMoveToTrash,
	toggleStar,
	toggleRead,
	loadMails,
  }) {
	return (
		<div className='mail-list'>
	
			  <section className="email-list">
        {mails.map(email => <div  key ={`${email.id}`}className ="email"><MailPreview mail={email} key={email.id} toggleStar={() => {
                toggleStar(mails, email.id);
                loadMails();
              }}
              toggleRead={() => {
                toggleRead(mails, email.id);
                loadMails();
              }}
              togglePreview={() => {
                togglePreview(mails, email.id);
                loadMails();
              }}
              onMoveToTrash={() => onMoveToTrash(email.id)}
            /></div>)}
    </section>


	</div>

			  
	  )
}
