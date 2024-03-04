const { useState } = require('react');

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const onChangeHandle = ({ target: { value } }) => {
    setQuery(value);
  };
  const onSubmitHandle = e => {
    e.preventDefault();
    if (query.trim === '') {
      return;
    }
    onSubmit(query);
  };
  return (
    <form onSubmit={onSubmitHandle}>
      <input
        type="text"
        name="query"
        onChange={onChangeHandle}
        placeholder="Enter movie"
      ></input>
      <button type="submit">Seach</button>
    </form>
  );
};
export default SearchForm;
