import { mailService } from '../services/email-service.js';

import {EmailList} from '../cmps/email-list.jsx'
import {MailHeader} from '../cmps/email-header.jsx'
import {MailFolderList} from '../cmps/email-folder-list.jsx'
import {ComposeMail} from '../cmps/email-compose.jsx'

export class MailApp extends React.Component {
  state = {
    mails: [],
    filterBy: null,
    isNewMail: false,

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
  composeMail = () => {
    this.setState({ isNewMail: true }, this.loadMails);
  };

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

  showUnreadCount(mails) {
    let unreadCount = 0;
    mails.map((mail) => {
      if (mail.isRead) unreadCount++;
    });
    let percent = (unreadCount / mails.length) * 100;
    return percent
  }
  ComposeMail = () => {
    this.setState({ isNewMail: false }, this.loadMails);
  };
  render() {
    const { mails, filterBy, isNewMail} = this.state;
    return (
      <div className='mail-app'>
        <div className='header-mail'>
        </div>
        <div className='body-mail flex'>
        <header className ="mail-header">   <MailHeader onSetFilter={this.onSetFilter}
/>
</header>
          <MailFolderList
          
            mails={mails}
            onFolderFilter={this.onFolderFilter}
            showUnreadCount={this.showUnreadCount}
          />
          <EmailList
            togglePreview={this.togglePreview}
            toggleStar={this.toggleStar}
            toggleRead={this.toggleRead}
            onMoveToTrash={this.onMoveToTrash}
            loadMails={this.loadMails}
            mails={mails}
          />

            <ComposeMail ComposeMail={this.ComposeMail} />
       
<footer className ="app-footer"></footer>
        </div>
      </div>
    );
  }
}
