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
//
//     );
//   }

// }