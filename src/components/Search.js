import "./styling/Home.css"
export function Search({ filterState, setFilterState }) {
  const handleFilterInput = (event) => {
    setFilterState(event.target.value);
  };
  return (
    <div className="search">

      <input value={filterState} type="text" onChange={handleFilterInput} placeholder="search..." />
    </div>
  );
}
