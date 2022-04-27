export class MailHeader extends React.Component {
    state = {
      mailSearch: '',
    };

    render(){
           return 	(
		<div className ="header-container">
			  <h5 >Star Mail</h5 >
			  <h5  >From</h5 >
			  <h5>Subject</h5 >
			  <h5  >Message</h5 >
			  <h5  >Labels</h5 >
			  <h5  >Date</h5 >
			  <h5 >Actions</h5 >
			</div>       
        )
    }
}