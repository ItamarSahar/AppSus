import { mailService } from '../services/email-service.js';

import {EmailList} from '../cmps/email-list.jsx'
import {MailHeader} from '../cmps/email-header.jsx'
import {ComposeMail} from '../cmps/email-compose.jsx'

export class MailApp extends React.Component {
  state = {
    mails: [],
    filterBy: null,
  };

  componentDidMount() {
    this.loadMails()
      .then(() => {
        let { mails } = this.state;
        console.log('mounting');
        mails.forEach((mail) => (mail.isOpen = false));
        mailService.saveMails(mails);
      })
      .then(() => this.loadMails());
  }

  loadMails = () => {
    const { filterBy } = this.state;
    mailService.query(filterBy).then((mails) => {
      this.setState({ mails });
    });
    return Promise.resolve();
  };
  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadMails);
  };


  render() {
    const { mails, filterBy} = this.state;
    return (
      <div className='mail-app flex'>
        <div className='header-mail'>
          <MailHeader          />
        </div>
        <div className='body-mail flex'>

          <EmailList
            mails={mails}
          />

        </div>
      </div>
    );
  }
}
