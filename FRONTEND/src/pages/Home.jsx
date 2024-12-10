import React from 'react'


function Home() {
  return (
<div>
  <div className="header">
    <div className="d-flex align-items-center">
      <div className="hamburger-menu" id="hamburger-menu">
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
      <h2 className="text-danger ms-3 mb-0 logo">
        Ticketing
      </h2>
    </div>
    <div className="d-flex align-items-center">
      <div className="search-bar me-3">
        <i className="fas fa-search">
        </i>
        <input placeholder="cari film" type="text" />
      </div>
      <div className="notif"><i className="fas fa-bell fa-2x me-3">
        </i></div>
      <div className="user-info">
        <i className="fas fa-user-circle fa-2x">
        </i>
        <a href="profile.html" className="text-decoration-none text-reset"><span>
            profile
          </span></a>
      </div>
    </div>
  </div>
  <div className="d-flex">
    <div className="sidebar" id="sidebar">
      <a className="active" href="#" id="movie-link">
        <i className="fas fa-film pe-2">
        </i>
        Movie
      </a>
      <a href="trending.html" id="trending-link">
        <i className="fas fa-fire pe-2">
        </i>
        Trending
      </a>
      <a href="food.html" id="food-link">
        <i className="fas fa-utensils pe-2">
        </i>
        Food
      </a>
    </div>
    <div className="flex-grow-1">
      <div className="main-content">
        <div id="carouselExampleControls" className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="gopay.jpg" className="d-block w-100" alt="gopay iklan'" />
            </div>
            <div className="carousel-item">
              <img src="jajan.jpg" className="d-block w-100" alt="iklan jajanan" />
            </div>
            <div className="carousel-item">
              <img src="cocacola.jpg" className="d-block w-100" alt="iklan cocacola" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>   
        <div className="tabs mb-4">
          <button className="active">
            Now Playing
          </button>
          <button>
            On Going
          </button>
        </div>
        <div className="row movie-list">
          <div className="col-6 col-md-4 col-lg-3 mb-4 movie">
            <a href="detail-film.html">
              <img alt="Avengers: Infinity War movie poster" src="avenger_age_of_ultron.jpg" />
            </a>
            <p>Avengers : Age of Ultron</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 mb-4 movie">
            <a href="detail-film.html">
              <img alt="Wall.E JUNE 27 movie poster" src="avengers_infinity_war.jpg" />
            </a>
            <p>Avengers : Infinity War</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 mb-4 movie">
            <a href="detail-film.html">
              <img alt="Frozen II movie poster" src="mario.jpg" />
            </a>
            <p>Mario</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 mb-4 movie">
            <a href="detail-film.html">
              <img alt="Mulan movie poster" src="minion.jpg" />
            </a>
            <p>Minion II</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 mb-4 movie">
            <a href="detail-film.html">
              <img alt="Maleficent Mistress Of Evil movie poster" src="sonic2.jpg" />
            </a>
            <p>Sonic 2</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 mb-4 movie">
            <a href="detail-film.html">
              <img alt="Joker movie poster" src="venom3.jpg" />
            </a>
            <p>Venom 3</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home