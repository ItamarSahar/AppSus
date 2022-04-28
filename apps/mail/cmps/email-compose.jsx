import { mailService } from '../services/email-service.js';



export class ComposeMail extends React.Component {
    state = {
        mail:{
      subject: '',
      body: '',    
      to: '',
    },
    display:{
        compose: 'none',
        button: 'flex',    
      }

         };
  
         handleChange = ({ target }) => {
            const field = target.name;
            const value = target.value;
            this.setState((prevState) => ({
              mail: { ...prevState.mail, [field]: value },
            }));
          };
                
            onCompose = (ev) => {
                const {to, subject, body } = this.state.mail;
                 const{RefreshMails} = this.props
                 this.CloseCompose()
        ev.preventDefault();
     mailService.createEmail(subject,body,to).then(this.setState(({mail: {subject: '',body: '',to: '' }}), () => {
        RefreshMails()
     }))}
                
            openCompose = () => {
                let { button,compose } = this.state.display
                   compose = 'none' ? 'block' : 'none'
                   button = 'flex' ?  'none' : 'flex'
                   this.setState({display:{compose,button}})
            }
     CloseCompose = () => {
        let { button,compose } = this.state.display
        compose = 'block' ? 'none' : 'block'
        button = 'none' ?  'flex' : 'none'
        this.setState({display:{compose,button}})
 }
     
      render(){
          
        const {to, subject, body } = this.state.mail;
        const {button,compose} = this.state.display;
         console.log(this.state)
         console.log(this.state.mail)
      return(
          <div>
                    <button onClick = {this.openCompose} className ={`compose-button button-17 ${button}`}>Send an Email</button>
        <div className={`compose-mail  ${compose}`}>
        <div className='new-header'>
          <span >Compose an email</span>
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
              value={body}
              onChange={this.handleChange}
              name='body'
              className='textArea'
            ></textarea>
                        </div>

            </form>
            <div className='send'>
              <div className='ComposeSend' onClick={this.onCompose} >
                Send Email
              </div>
              </div>
</div>
</div>)

      }
      
    }