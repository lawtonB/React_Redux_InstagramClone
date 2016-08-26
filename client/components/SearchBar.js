import React from 'react';

const SearchBar = React.createClass({
  getInitalState () {
    return {
      searchTerm: '',
    };
  },
  componentDidMount() {
  this.refs.myInput.focus();
},

  // onInputChange(searchTerm) {
  //   this.setState({searchTerm});
  //   this.props.onSearchTermChange(searchTerm)
  // },


  render() {
    return (
      <input
      ref='myInput'
      // value={state.test}
      // onChange={(e) =>
      // this.onInputChange(e.target.value)}
      />
    );
  }


})

export default SearchBar;
