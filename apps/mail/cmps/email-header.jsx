
export class MailHeader extends React.Component {
  state = {
    mailSearch: '',
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => ({ ...prevState, [field]: value }));
    console.log(this.state)
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
       
          <div className='search-mail'>
            
            {/* <form onSubmit={this.getFilter} className='search-bar'>
              <input
                type='text'
                id='searchMail'
                name='mailSearch'
                className='searchMail'
                placeholder='Search Mail'
                value={mailSearch}
                onChange={this.handleChange}
              />
            </form> */}
  <form   className ="mail-search-form"role="search">
  <label htmlFor="search">Search for stuff</label>
  <input className ="mail-search-input" id="searchMail" type="search" placeholder="Search mail..."  name='mailSearch'
 autoFocus required value={mailSearch}
                onChange={this.handleChange}
 />
</form>
          </div>
       
        </div>
    );
  }
}
