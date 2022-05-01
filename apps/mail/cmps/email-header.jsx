
export class MailHeader extends React.Component {
  state = {
    filterSearch: '',
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => ({ ...prevState, [field]: value }));
    this.props.onSetFilter(this.state)
  };

  onFilter = (ev) => {
    ev.preventDefault();
    this.props.onSetFilter(this.state);
    this.clear();
  };
  clear = () => {
    let {filterSearch} = this.state
    filterSearch = ''
    this.setState({filterSearch})
  }

  render() {
    const { filterSearch } = this.state;
    return (
      <div className='m'>
       
          <div className='search-mail'>
            
        
  <form onSubmit={this.onFilter} className ="mail-search-form"role="search">
  <label htmlFor="text"></label>
  <input className ="mail-search-input" id="searchMail" type="text" placeholder="Search mail..."  name='filterSearch' 
  
 autoFocus  value={filterSearch}
                onChange={this.handleChange}
 />
</form>
          </div>
       
        </div>
    );
  }
}
