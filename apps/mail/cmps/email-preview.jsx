

export function MailPreview({ email }){


    return(
        <article className="book-preview" >
        <h3> {email.subject}</h3>
        <h3>{email.to}</h3>
        <h3>{email.readAt}</h3>
      </article>
  
    )
}