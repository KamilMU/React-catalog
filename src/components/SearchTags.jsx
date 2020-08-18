import React from 'react';

const tags = [
  { value: 1, tagName: 'Apple' },
  { value: 2, tagName: 'Xiaomi' },
  { value: 3, tagName: 'Sumsung' }
]

class SearchTags extends React.Component {

  onFilter = (e) => {
    this.props.filterItemsWithTags(e.target.value)
    this.setState({
      [e.target.value]: e.target.value
    })
  }

  render() {
    return (
      <ul className="searchbar-list" >
        {tags.map(tag =>
          <li className="searchbar-list__item" value={tag.value} onClick={this.onFilter} key={tag.value}>{tag.tagName}</li>
        )}
      </ul>
    )
  }
}


export default SearchTags