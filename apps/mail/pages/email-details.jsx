// import { mailService } from '../services/email-service.js';


// export class MailDetails extends React.Component {
// state = {
//     mail:''
// }

// loadMail = () => {
//     const { mailId } = this.props.match.params;
//     mailService.getMailById(mailId).then((mail) => {
//       if (!mail) return this.props.history.push('/mail');
//       this.setState({ mail });
//     });
//   };
//   onGoBack = () => {
//     this.props.history.push('/mail');
//   };
//   render() {
//     const { mail } = this.state;
//     if (!mail) return <div>Loading....</div>;
//     return (
//       <div className='mail-details flex-colunm'>
//         <h1>{mail.subject}</h1>
//         <div className='details-from-to'>
//           <h2>{mail.from}</h2>
//           <span>{mail.fromEmail}</span>
//           <h5>To</h5>
//         </div>
//         <div className='details-body'>
//           <p>{mail.body}</p>
//         </div>
//         <button className='primary-btn' onClick={this.onGoBack}>
//           Go back
//         </button>
//       </div>
//     );
//   }

// }