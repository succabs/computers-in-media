import React from "react"


export default function Search({ searchQuery, setSearchQuery }) {

  return(


        <div className="col-6 box">

    <form action="/" method="get">
        <label htmlFor="header-search" class="form-label">
            <span className="visually-hidden">Search for a movie</span>
        </label>
        <div className="input-group mb-3">
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            className="form-control"
            placeholder="Search for a movie"
            name="s"
        />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
</div>
        </form>
        </div>




    

);
}

  