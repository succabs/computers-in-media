import React from "react"
import Search from "./Search"
import Results from "./Results"

class SearchContainer extends React.Component {

state = {
 results: [
   {
     id: 1,
     title: "Setup development environment",
     completed: true
   },
 ]
};
    render() {
    return (
     <div class="container p-2">
  <div class="row p-2 justify-content-center">
    <div class="col-sm">
    </div>
    <div class="col-sm">
      <Search  />
    </div>
    <div class="col-sm">
    </div>
  </div>

     <Results results={this.state.results} />

</div>   
    )
  }
}
export default SearchContainer
