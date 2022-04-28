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
      var email =  mailService.createEmail(this.state);
      console.log(`email = `, email)
      mailService.pushMail(email)
        this.setState({ to: '', subject: '', text: '' });
      };
  
  onComposeClick = () => {
         let {display} = this.state
         display = (display = '') ? 'none' : 'none'
       this.setState({display : display}) 
  }
      render(){
          
        const {display, to, subject, text } = this.state;
      return(
          <div>

        <div className={`compose-mail ${display}`}>
        <div className='new-header'>
          <span >Compose an email</span>
          <span className='close' onClick={this.props.closeComposeMail}>
          </span>
        </div>
        <form onSubmit={this.onCompose}>
          <div className='to'>
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
                Send Email
              </div>
              </div>
</div>
</div>)

      }
      
    }