
export class MailHeader extends React.Component {
  state = {
    mailSearch: '',
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => ({ ...prevState, [field]: value }));
  };

  getFilter = (ev) => {
    ev.preventDefault();
    this.props.onSetFilter(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ mailSearch: '' });
  };

  render() {
    const { mailSearch } = this.state;
    return (
      <div className='m'>
          <div className='mail-logo'>
            <img src='./assets/SVG/mail.svg' height = '10px' />
          </div>
          <div className='search-mail'>
            <form onSubmit={this.getFilter} className='mail-filter'>
              <input
                type='text'
                id='searchMail'
                name='mailSearch'
                className='searchMail'
                placeholder='Search Mail'
                value={mailSearch}
                onChange={this.handleChange}
              />
            </form>
          </div>
       
        </div>
    );
  }
}
