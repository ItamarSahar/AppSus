import { mailService } from '../services/email-service.js';



export class ComposeMail extends React.Component {
    state = {
      to: '',
      subject: '',
      text: '',
    };
  
    handleChange = ({ target }) => {
      const field = target.name;
      const value = target.value;
      this.setState((prevState) => ({ ...prevState, [field]: value }));
    };
    onCompose = (ev) => {
        ev.preventDefault();
        mailService.createEmail(this.state);
        this.setState({ to: '', subject: '', text: '' });
        this.props.closeCompose();
      };

    
      render(){
        const { to, subject, text } = this.state;
      return(
        <div className='compose-mail'>
        <div className='new-header'>
          <span>Compose an email</span>
          <span className='close' onClick={this.props.closeComposeMail}>
          </span>
        </div>
        <form onSubmit={this.onCompose}>
          <div className='to-subject'>
            <input
              type='text'
              name='to'
              placeholder='To'
              value={to}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              value={subject}
              onChange={this.handleChange}
            />
            <textarea
              value={text}
              onChange={this.handleChange}
              name='text'
              className='textArea'
            ></textarea>
                        </div>

            </form>
            <div className='send'>
              <div className='ComposeSend' onClick={this.onCompose}>
                Send
              </div>
              </div>
</div>
)

      }
    }