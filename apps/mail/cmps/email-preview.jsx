const { Link } = ReactRouterDOM;

export function MailPreview({
  mail,
  togglePreview,
  onMoveToTrash,
  toggleStar,
  toggleRead,
}) {
  let date = new Date(mail.sentAt);
  return !mail.isOpen ? (
    <tr className={mail.isRead ? 'mail-preview' : 'mail-preview bold '}>
      <td className='star-preview' onClick={toggleStar}>
        {!mail.star ? (
          <img src='assets/SVG/notFilledStar.svg' alt='star' />
        ) : (
          <img src='assets/SVG/filledStar.svg' alt='star' />
        )}
      </td>

      <td className='subject-preview' onClick={togglePreview}>
        {mail.subject.length > 15
          ? mail.subject.slice(0, 15) + `...`
          : mail.subject}
      </td>
      <td className='text-preview' onClick={togglePreview}>
        {mail.body.length > 50 ? mail.body.slice(0, 50) + `...` : mail.body}
      </td>
      <td onClick={togglePreview}>
        {date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}
      </td>
      <td className='preview-options'>
        {mail.isRead ? (
          <img
            src='assets/SVG/markAsRead.svg'
            onClick={toggleRead}
            height='22px'
          />
        ) : (
          <img
            src='assets/SVG/markAsUnRead.svg'
            onClick={toggleRead}
            height='22px'
          />
        )}
        <img
          className='delete'
          src='assets/SVG/trash.svg'
          height='20px'
          onClick={onMoveToTrash}
        />
   
      </td>
    </tr>
  ) : (
    <tr className='expand-preview'>
      <td className='star-preview' onClick={toggleStar}>
        {!mail.star ? (
          <img src='assets/SVG/notFilledStar.svg' alt='star' />
        ) : (
          <img src='assets/SVG/filledStar.svg' alt='star' />
        )}
      </td>
      <td className='from-preview' onClick={togglePreview}>
        {mail.from}
      </td>
      <td className='expand-preview-cell' onClick={togglePreview}>
        <div className='expand-preview-cell-content'>
          <div onClick={togglePreview} className='from-preview-open flex'>
            <h3>
             {mail.to}
            </h3>
          </div>
          <div onClick={togglePreview} className='text-preview-open'>
            {mail.body}
          </div>
        </div>
      </td>
    </tr>
  );
}
