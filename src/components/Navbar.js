import React from 'react';


const Navbar = () => {
  return (
    <>
       {/* <nav className="navbar navbar-expand-lg bg-warning navbar-light sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">resuShare</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
           </div>
        </nav> */}

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">resume share</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Add resume</a>
        </li>
       <div>
       <button type="button" class="btn btn-primary m-3">Login</button>
       <button type="button" class="btn btn-primary">Signup</button>
       </div>
        
      </ul>
    </div>
  </div>
</nav>

   </>
  )
}

export default Navbar;
