
export class MailHeader extends React.Component {
  state = {
    mailSearch: '',
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => ({ ...prevState, [field]: value }));

  };

  onFilter = (ev) => {
    ev.preventDefault();
    this.props.onSetFilter(this.state);
    this.resetForm();
  };


  render() {
    const { mailSearch } = this.state;
    return (
      <div className='m'>
       
          <div className='search-mail'>
            
        
  <form onSubmit={this.onFilter} className ="mail-search-form"role="search">
  <label htmlFor="text">Search for stuff</label>
  <input className ="mail-search-input" id="searchMail" type="text" placeholder="Search mail..."  name='mailSearch'
 autoFocus required value={mailSearch}
                onChange={this.handleChange}
 />
</form>
          </div>
       
        </div>
    );
  }
}
