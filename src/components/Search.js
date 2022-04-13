export function Search({ filterState, setFilterState }) {
  const handleFilterInput = (event) => {
    setFilterState(event.target.value);
  };
  return (
    <>
      <h1> Search</h1>

      <label>Search</label>
      <input value={filterState} type="text" onChange={handleFilterInput} />
    </>
  );
}
