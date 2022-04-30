export function MailFolderList({
  mails,
  showUnreadCount,
  onFolderFilter,
}) {
  let percent = 0;
  if(showUnreadCount(mails)){
    percent = Math.round(showUnreadCount(mails))
  }
  const getFolderFilter = (ev) => {
    ev.preventDefault();
    onFolderFilter(ev.target.value);
  };
  
  return (
    <div className='mail-folder-list'>
      <ul>
        <li  className ="first-li"onClick={getFolderFilter} value='0'>
        <img className ="inbox-image"
          src='../assets/svg/unread.svg'
          height='10px'
        />
        <p className ="inbox">
          Inbox        
          </p>
        </li>
        <li onClick={getFolderFilter} value='1'>
        <img
          src='../assets/svg/read.svg'
          height='10px'
        />
          Read    
        </li>
        <li onClick={getFolderFilter} value='2'>
        <img
          src='../assets/svg/unread.svg'
          height='10px'
        />
          Unread        
        </li>
        <li onClick={getFolderFilter} value='3'>
        <img
          src='../assets/svg/star.svg'
          height='10px'
        />
          Starred    
        </li>
        <li onClick={getFolderFilter} value='4'>
        <img
          src='../assets/svg/trash.svg'
          height='10px'
        />
          Trash    
        </li>
        <li onClick={getFolderFilter} value='5'>
        <img
          src='../assets/svg/sent.svg'
          height='10px'
        />
          Sent    
        </li>
      </ul>
      <div className='meter'>
        <span>            {percent}%
</span>
     <meter min='0' max='100'  low="70" high="20" value={percent}>
          {percent}
        </meter>  
      </div>
    </div>
  );
}
