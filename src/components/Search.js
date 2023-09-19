export default function Search({ searchQuery, setSearchQuery }) {
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-input"
      type="text"
      placeholder="Search..."
    />
  );
}
