
import './App.css'

function App() {

  return (
    <>
      <div>
        <div className="nameDiv">
          <h1 className="name">Made by: Shishir James</h1>
        </div>
        <div className="manuDiv">
          <button className="homeButton">Home</button>
          <button className="browseButton">Browse</button>
          <button className="cartButton">Cart</button>
          </div>
        <div className="filterDiv">
          <div className="filter">Filters</div>
          <div>
            <input type="checkbox" />
            <label className="filter1">Filter 1</label>
            <input type="checkbox" />
            <label className="filter2">Filter 2</label>
            <input type="checkbox" />
            <label className="filter3">Filter 3</label>
            <input type="checkbox" />
            <label className="filter4">Filter 4</label>
          </div>
        </div>
        <div className="header">
          <h1 className="scheduleName"> ScheduleNEU</h1>
          <input type="text" className="searchPlace" placeholder="Search.."></input>
          <button>Search</button>
          <button>Add all Section</button>
          <button>Remove all</button>
        </div>
        <div>
          <div>
            <div>Course Number</div>
            <div>Course Name</div>
            <div>CRN Number</div>
            <div>Professor Name</div>
            <div>Professor Ratings</div>
            <div>Comments</div>
            <div>Avaibility</div>
          </div>
          <div>
            <div>CS 5000</div>
            <div>Web Development</div>
            <div><button>Add</button></div>
            <div>Shishir James</div>
            <div>5/5</div>
            <div>Good</div>
            <div>Available</div>
          </div>
          <div>
            <div>CS 5000</div>
            <div>Web Development</div>
            <div><button>Add</button></div>
            <div>Shishir James</div>
            <div>5/5</div>
            <div>Good</div>
            <div>Available</div>
          </div>
          <div>
            <div>CS 5000</div>
            <div>Web Development</div>
            <div><button>Add</button></div>
            <div>Shishir James</div>
            <div>5/5</div>
            <div>Good</div>
            <div>Available</div>
          </div>
          <div>
            <div>CS 5000</div>
            <div>Web Development</div>
            <div><button>Add</button></div>
            <div>Shishir James</div>
            <div>5/5</div>
            <div>Good</div>
            <div>Available</div>
          </div>
          <div>
            <div>CS 5000</div>
            <div>Web Development</div>
            <div><button>Add</button></div>
            <div>Shishir James</div>
            <div>5/5</div>
            <div>Good</div>
            <div>Available</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
