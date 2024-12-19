<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../styles/detail-film.css";
import axios from "axios";

function Detailfilm() {
  const navigate = useNavigate();
  const { id } = useParams(); // Ambil id dari URL
  const [movie, setMovie] = useState(null); // State untuk menyimpan data film
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [moreMovies, setMoreMovies] = useState([]); // State untuk More Movies

  // Fetch movie by ID dan More Movies
  useEffect(() => {
    setMovie(null); // Reset detail movie
    setMoreMovies([]); // Reset daftar More Movies
    setIsLoading(true); // Reset loading state
  
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/movies/${id}`);
        setMovie(response.data);
  
        const status = response.data.status;
        const moreMoviesResponse = await axios.get(
          `http://localhost:5000/api/movies?status=${status}`
        );
        
        const filteredMovies = moreMoviesResponse.data
          .filter((m) => m._id !== id)
          .slice(0, 4); // Batasi hingga maksimal 4
        setMoreMovies(filteredMovies);
      } catch (err) {
        setError("Failed to fetch movie details");
      } finally {
        setIsLoading(false); // Matikan loading state
      }
      console.log("Fetching movie for ID:", id); // Debugging
    };
  
    fetchMovie();
  }, [id]); // Dependency array mencakup `id`
  
  
  
  

  const goToProfile = () => {
    navigate("/profile", {
      state: { from: "/detail-film" },
    });
  };

  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="d-flex align-items-center">
          <div className="hamburger-menu" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h2 className="ms-3 mb-0 logo">Ticketing</h2>
        </div>
        <div className="d-flex align-items-center">
          <div className="search-bar me-3">
            <i className="fas fa-search"></i>
            <input placeholder="cari film" type="text" />
          </div>
          <div className="notif">
            <i className="fas fa-bell fa-2x me-3"></i>
          </div>
          <div className="user-info">
            <span
              onClick={goToProfile}
              className="text-decoration-none text-reset d-flex"
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-user-circle fa-2x"></i>
              <span className="align-self-center">profile</span>
            </span>
          </div>
        </div>
      </div>

      <div className="d-flex">
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarActive ? "active" : ""}`} id="sidebar">
          <a className="active" href="/">
            <i className="fas fa-film pe-2"></i>Movie
          </a>
          <a href="/trending">
            <i className="fas fa-fire pe-2"></i>Trending
          </a>
          <a href="/food">
            <i className="fas fa-utensils pe-2"></i>Food
          </a>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1">
          <div className="main-content">
            {/* Banner */}
            <div className="banner">
              <video controls src={movie.videoTrailer} alt={`${movie.title} trailer`} />
            </div>

            {/* Movie Details */}
            <div className="container-profile">
              <div className="film-profile">
                <div className="film-details">
                  <div className="image-wrapper">
                    <img alt={movie.title} src={movie.src} />
                    <a href="/pilih-bioskop" className="text-decoration-none text-reset">
                      <div className="buy">Buy</div>
                    </a>
                  </div>
                  <div className="detail-profile align-self-center d-flex flex-column">
                    <div className="film-title">{movie.title}</div>
                    <div className="film-description">
                      <div className="film-item">
                        <p className="label">Producer</p>
                        <span className="value">:</span>
                        <p>{movie.producer}</p>
                      </div>
                      <div className="film-item">
                        <p className="label">Director</p>
                        <span className="value">:</span>
                        <p>{movie.director}</p>
                      </div>
                      <div className="film-item">
                        <p className="label">Writer</p>
                        <span className="value">:</span>
                        <p>{movie.writer}</p>
                      </div>
                    </div>
                    <div className="rating d-flex align-items-center">
                        <span className="rating-value ">{movie.rating}</span>
                        <div className="star text-warning">
                            {[...Array(5)].map((_, i) => (
                            <span key={i}>
                                <i
                                className={
                                    i < movie.rating
                                    ? "fas fa-solid fa-star"
                                    : "far fa-star"
                                }
                                ></i>
                            </span>
                            ))}
                        </div>
                        <span className="votes">{movie.votes} Votes</span>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="additional-info mt-3">
                  <p>{movie.additionalInfo}</p>
                </div>
            </div>
            </div>


                {/* Cast */}
                <div className="container-cast-movie ms-5">
                    <div className="casting">
                        <h2 className="ms-5">CAST</h2>
                        <div className="profile-cast row d-flex my-4">
                            {movie.cast.map((cast, index) => (
                            <div key={index} className="cast col-6 col-md-4 col-lg-3 d-flex mb-5">
                                <img src={cast.image} alt={cast.name} />
                                <p className="align-self-center ms-4">{cast.name}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
             

            {/* More Movies */}
            <div className="more-movies">
              <h2 className="ms-5">More Movies</h2>
              <div className="movies row my-4">
                {moreMovies.map((movie, index) => (
                  <div key={index} className="daftar-movie col-6 col-md-4 col-lg-3">
                    <Link to={`/detail-film/${movie._id}`}>
                      <img src={movie.src} alt={movie.title} />
                      <p>{movie.title}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
=======
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import '../styles/detail-film.css'

function Detailfilm() {
    const navigate = useNavigate()

    const goToProfile = () => {
        navigate('/profile', {
        state: { from: '/detail-film'}
        })
    }

    const banners = [
    { video: '/videos/venomtrailer.mp4'}
    ]

    const imgprofiles = [
    { name: 'venom', image: 'images/venom3.jpg'}
    ]

    const casts = [
    { name: 'Tom Hardy', image: '/images/tom-hardy.jpg' },
    { name: 'Nama Pemain 1', image: '/images/tom-hardy.jpg' },
    { name: 'Nama Pemain 2', image: '/images/tom-hardy.jpg' },
    { name: 'Nama Pemain 3', image: '/images/tom-hardy.jpg' },
    { name: 'Tom Hardy', image: '/images/tom-hardy.jpg' },
    { name: 'Nama Pemain 1', image: '/images/tom-hardy.jpg' },
    { name: 'Nama Pemain 2', image: '/images/tom-hardy.jpg' },
    { name: 'Nama Pemain 3', image: '/images/tom-hardy.jpg' },
    ];

    const movies = [
    { name: 'Nama Film', image: '/images/venom3.jpg' },
    { name: 'Nama Film', image: '/images/venom3.jpg' },
    { name: 'Nama Film', image: '/images/venom3.jpg' },
    { name: 'Nama Film', image: '/images/venom3.jpg' },
    ];

    // State untuk mengontrol sidebar
      const [isSidebarActive, setIsSidebarActive] = useState(false);
    
      // Fungsi untuk toggle sidebar
      const toggleSidebar = () => {
        setIsSidebarActive(!isSidebarActive);
      };
    
      // Fungsi untuk navigasi
      const handleNavigation = (section) => {
        window.location.href = `#${section}`;
      };
    
    
    return (
        <div>
            <div className="header">
                <div className="d-flex align-items-center">
                    <div className="hamburger-menu" onClick={toggleSidebar}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h2 className="ms-3 mb-0 logo">Ticketing</h2>
                </div>
                <div className="d-flex align-items-center">
                    <div className="search-bar me-3">
                        <i className="fas fa-search"></i>
                        <input placeholder="cari film" type="text" />
                    </div>
                    <div className="notif">
                        <i className="fas fa-bell fa-2x me-3"></i>
                    </div>
                    <div className="user-info">
                    <span onClick={goToProfile} className="text-decoration-none text-reset d-flex" style={{cursor: 'pointer'}}>
                        <i className="fas fa-user-circle fa-2x"></i>
                        <span className="align-self-center">profile</span>
                    </span>
                    </div>
                </div>
            </div>

            <div className="d-flex">
            {/* Sidebar */}
            <div className={`sidebar ${isSidebarActive ? "active" : ""}`} id="sidebar">
            <a className="active" href="/" onClick={() => handleNavigation("movie")}>
                <i className="fas fa-film pe-2"></i>Movie
            </a>
            <a href="/trending" onClick={() => handleNavigation("trending")}>
                <i className="fas fa-fire pe-2"></i>Trending
            </a>
            <a href="/food" onClick={() => handleNavigation("food")}>
                <i className="fas fa-utensils pe-2"></i>Food
            </a>
            </div>

                <div className="flex-grow-1">
                    <div className="main-content">
                        {banners.map((banner, index) => (
                            <div key={index} className="banner">
                            <video controls src={banner.video} alt="Venom trailer" />
                        </div>
                        ))}
                        

                        <div className="container-profile">
                            <div className="film-profile">
                                <div className="film-details">
                                    {imgprofiles.map((imgprofile, index) => (
                                        <div key={index} className="image-wrapper">
                                            <img alt={imgprofile.name} src={imgprofile.image} />
                                            <a href="/pilih-bioskop" className="text-decoration-none text-reset">
                                                <div className="buy">Buy</div>
                                            </a>
                                        </div>
                                    ))}
                                    
                                    <div className="detail-profile align-self-center d-flex flex-column">
                                        <div className="film-title">Venom: Let There Be Carnage</div>
                                        <div className="film-description">
                                            <div className="film-item">
                                                <p className="label">Producer</p><span className="value">:</span>
                                                <p>Nama producer</p>
                                            </div>
                                            <div className="film-item">
                                                <p className="label">Director</p><span className="value">:</span>
                                                <p>Nama director</p>
                                            </div>
                                            <div className="film-item">
                                                <p className="label">Writer</p><span className="value">:</span>
                                                <p>Nama writer</p>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <span>5</span>
                                            <div className="star px-3 text-warning">
                                                <span><i class="fas fa-solid fa-star"></i></span>
                                                <span><i class="fas fa-solid fa-star"></i></span>
                                                <span><i class="fas fa-solid fa-star"></i></span>
                                                <span><i class="fas fa-solid fa-star"></i></span>
                                                <span><i class="fas fa-solid fa-star"></i></span>
                                            </div>
                                            <span>1 Votes</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="additional-info mt-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora molestias cumque, aperiam soluta debitis ipsam repudiandae quasi, repellat perspiciatis consectetur et hic suscipit, quo corrupti doloremque illo. Fugiat dolorem tempora non cum quibusdam amet, deleniti dolores labore eveniet atque nam quia numquam exercitationem nisi eaque, et voluptate quidem facilis!
                                </div>
                            </div>
                        </div>

                        <div className="container-cast-movie ms-5">
                            <div className="casting">
                                <h2 className="ms-5">CAST</h2>
                                <div className="profile-cast row d-flex my-4">
                                    {casts.map((cast, index) => (
                                        <div key={index} className="cast col-6 col-md-4 col-lg-3 d-flex mb-5">
                                            <img src={cast.image} alt={cast.name} />
                                            <p className="align-self-center ms-4">{cast.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="more-movies">
                            <h2 className="ms-5">More Movies</h2>
                            <div className="movies row my-4">
                                {movies.map((movie, index) => (
                                    <div key={index} className="daftar-movie col-6 col-md-4 col-lg-3">
                                        <img src={movie.image} alt={movie.name} />
                                        <p>{movie.name}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
>>>>>>> 62a42647232249849df32daa590cc2148c4c324f
}

export default Detailfilm;
