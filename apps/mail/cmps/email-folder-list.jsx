export function MailFolderList({
    mails,
    showUnreadCount,
    onFolderFilter,
  }) {
    let percent = 0;
    percent = showUnreadCount(mails);
    const getFolderFilter = (ev) => {
      ev.preventDefault();
      onFolderFilter(ev.target.value);
    };
    return (
      <div className='mail-folder-list'>
        <ul>
          <li  className ="first-li"onClick={getFolderFilter} value='0'>
          <img className ="inbox-image"
            src='assets/SVG/markAsUnread.svg'
            height='10px'
          />
          <p className ="inbox">
            Inbox        
            </p>
          </li>
          <li onClick={getFolderFilter} value='1'>
          <img
            src='assets/SVG/markAsRead.svg'
            height='10px'
          />
            Read    
          </li>
          <li onClick={getFolderFilter} value='2'>
          <img
            src='assets/SVG/markAsUnread.svg'
            height='10px'
          />
            Unread        
          </li>
          <li onClick={getFolderFilter} value='3'>
          <img
            src='assets/SVG/filledStar.svg'
            height='10px'
          />
            Starred    
          </li>
          <li onClick={getFolderFilter} value='4'>
          <img
            src='assets/SVG/moveToTrash.svg'
            height='10px'
          />
            Trash    
          </li>
          <li onClick={getFolderFilter} value='5'>
          <img
            src='assets/SVG/sent.svg'
            height='10px'
          />
            Sent    
          </li>
        </ul>
        <div className='meter'>
          <span>{percent}</span>
          <meter min='0' max='100'  low="70" high="20"value={percent}>
            {percent}
          </meter>
        </div>
      </div>
    );
  }
  