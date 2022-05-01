import { mailService } from '../services/email-service.js';

import {EmailList} from '../cmps/email-list.jsx'
import {MailHeader} from '../cmps/email-header.jsx'
import {MailFolderList} from '../cmps/email-folder-list.jsx'
import {ComposeMail} from '../cmps/email-compose.jsx'

export class MailApp extends React.Component {
  state = {
    mails: [],
    filterBy: null,
    folderFilter: 0,

  };

  componentDidMount() {
    this.loadMails()
      .then(() => {
        let { mails } = this.state;
        mails.map((mail) => (mail.isOpen = false));
        mailService.saveMails(mails);
      })
      .then(() => this.loadMails());
      document.body.style.overflowY = 'hidden' 
  }

 
  loadMails = () => {
    const { filterBy,folderFilter } = this.state;

    mailService.query(filterBy,folderFilter).then((mails) => {
      this.setState({ mails });
    });
    return Promise.resolve();
  };
  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadMails);
  };


  onFolderFilter = (folderFilter) => {
    this.setState({ folderFilter: folderFilter }, this.loadMails);
  };

  togglePreview(mails, mailId) {
    mails.map((mail) => {
      if (mail.id === mailId) {
        mail.isOpen = !mail.isOpen;
        mail.isRead = true;
      }
    });
    mailService.saveMails(mails);
  }

  toggleStar(mails, mailId) {
    mails.map((mail) => {
      if (mail.id === mailId) {
        mail.star = !mail.star;
      }
    });
    mailService.saveMails(mails);
  }

  toggleRead(mails, mailId) {
    mails.map((mail) => {
      if (mail.id === mailId) {
        mail.isRead = !mail.isRead;
      }
    });
    mailService.saveMails(mails);
  }
  
  onMoveToTrash = (mailId) => {
    let mails = mailService.loadMails();
 {
      mails.map((mail) => {
        if (mail.id === mailId) {
          mail.isTrash = true;
        }
      });
      mailService.saveMails(mails);
      this.loadMails()
    }
  };

  countUnread(mails) {
    let unreadCount = 0;
    mails.map((mail) => {
      if (mail.isRead) unreadCount++;
    });
    let percent = (unreadCount / mails.length) * 100;
    return percent
  }
  RefreshMails = () => {
   const mails =  mailService.loadMails()
   this.setState({mails})
  };
  render() {
    const { mails} = this.state;
    return (
      <div className='mail-app'>
     
        <div className='body-mail'>
        <header className ="mail-header">   <MailHeader onSetFilter={this.onSetFilter}
/>
</header>

<ComposeMail RefreshMails={this.RefreshMails} />
          <MailFolderList
          
            mails={mails}
            onFolderFilter={this.onFolderFilter}
            showUnreadCount={this.countUnread}
          />
          <EmailList
            togglePreview={this.togglePreview}
            toggleStar={this.toggleStar}
            toggleRead={this.toggleRead}
            onMoveToTrash={this.onMoveToTrash}
            loadMails={this.loadMails}
            mails={mails}
          />

       
<footer className ="app-footer"></footer>
        </div>
      </div>
    );
  }
}
