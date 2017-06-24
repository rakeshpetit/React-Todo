var React = require('react');

var TodoSearch = React.createClass({

  render: function () {
    return (
    <div>
      <div>
        <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch}/>
      </div>
      <div>
        <label>
          <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
          Show completed Todos
        </label>
      </div>
    </div>
    )
  }
});

module.exports = TodoSearch;
