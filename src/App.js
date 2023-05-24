import Search from "./component/Search";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
function App() {

  function handleFiltersChange(newFilters) {
    console.log('New filters: ', newFilters);
  }

  return (


    <div className="App">
      
      <Search onSubmit={handleFiltersChange}/>
      <Navbar/>
      <Products/>
    </div>
  );
}

export default App;
