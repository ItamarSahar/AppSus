// import { mailService } from '../services/email-service.js';



// export class ComposeMail extends React.Component {
//     state = {
//       to: '',
//       subject: '',
//       text: '',
//     };
  
//     handleChange = ({ target }) => {
//       const field = target.name;
//       const value = target.value;
//       this.setState((prevState) => ({ ...prevState, [field]: value }));
//     };
//     onSendMail = (ev) => {
//         ev.preventDefault();
//         mailService.createEmail(this.state);
//         this.setState({ to: '', subject: '', text: '' });
//         this.props.closeCompose();
//       };


//       render(){
//         const { to, subject, text } = this.state;



//       }
//     }