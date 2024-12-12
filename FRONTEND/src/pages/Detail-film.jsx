import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/detail-film.css'

function Detailfilm () {
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
        <h2 className="ms-3 mb-0 logo">
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
        <a className="active" href="index.html" id="movie-link">
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
            <div className="banner">
            <video controls src="venomtrailer.mp4" alt>
            </video></div>
            <div className="container-profile">
            <div className="film-profile">
                <div className="film-details">
                <div className="image-wrapper">
                    <img alt="Profile of the film" src="venom3.jpg" />
                    <a href="Pilih-Bioskop.html" className="text-decoration-none text-reset">
                    <div className="buy">Buy</div>
                    </a>
                </div>
                <div className="detail-profile align-self-center d-flex flex-column">
                    <div className="film-title">
                    Venom: Let There Be Carnage
                    </div>
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
                        <span><i className="fas fa-solid fa-star" /></span>
                        <span><i className="fas fa-solid fa-star" /></span>
                        <span><i className="fas fa-solid fa-star" /></span>
                        <span><i className="fas fa-solid fa-star" /></span>
                        <span><i className="fas fa-solid fa-star" /></span>
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
                <div className="cast col-6 col-md-4 col-lg-3 d-flex mb-5">
                    <img src="tom-hardy.jpg" alt="cast" />
                    <p className="align-self-center ms-4">Tom Hardy</p>
                </div>
                <div className="cast col-6 col-md-4 col-lg-3 d-flex mb-5">
                    <img src="tom-hardy2.jpg" alt />
                    <p className="align-self-center ms-4">Nama Pemain</p>
                </div>
                <div className="cast col-6 col-md-4 col-lg-3 d-flex mb-5">
                    <img src="tom-hardy.jpg" alt />
                    <p className="align-self-center ms-4">Nama Pemain</p>
                </div>
                <div className="cast col-6 col-md-4 col-lg-3 d-flex mb-5">
                    <img src="tom-hardy.jpg" alt />
                    <p className="align-self-center ms-4">Nama Pemain</p>
                </div>
                <div className="cast col-6 col-md-4 col-lg-3 d-flex mb-5">
                    <img src="tom-hardy.jpg" alt />
                    <p className="align-self-center ms-4">Nama Pemain</p>
                </div>
                <div className="cast col-6 col-md-4 col-lg-3 d-flex mb-5">
                    <img src="tom-hardy.jpg" alt />
                    <p className="align-self-center ms-4">Nama Pemain</p>
                </div>
                <div className="cast col-6 col-md-4 col-lg-3 d-flex mb-5">
                    <img src="tom-hardy.jpg" alt="cast" />
                    <p className="align-self-center ms-4">Tom Hardy</p>
                </div>
                <div className="cast col-6 col-md-4 col-lg-3 d-flex mb-5">
                    <img src="tom-hardy2.jpg" alt />
                    <p className="align-self-center ms-4">Nama Pemain</p>
                </div>
                <div className="cast col-6 col-md-4 col-lg-3 d-flex mb-5">
                    <img src="tom-hardy.jpg" alt />
                    <p className="align-self-center ms-4">Nama Pemain</p>
                </div>
                <div className="cast col-6 col-md-4 col-lg-3 d-flex mb-5">
                    <img src="tom-hardy.jpg" alt />
                    <p className="align-self-center ms-4">Nama Pemain</p>
                </div>
                <div className="cast col-6 col-md-4 col-lg-3 d-flex mb-5">
                    <img src="tom-hardy.jpg" alt />
                    <p className="align-self-center ms-4">Nama Pemain</p>
                </div>
                <div className="cast col-6 col-md-4 col-lg-3 d-flex mb-5">
                    <img src="tom-hardy.jpg" alt />
                    <p className="align-self-center ms-4">Nama Pemain</p>
                </div>
                </div>
            </div>
            </div>
            <div className="more-movies">
            <h2 className="ms-5">More Movies</h2>
            <div className="movies row my-4">
                <div className="daftar-movie col-6 col-md-4 col-lg-3">
                <img src="venom3.jpg" alt />
                <p>Nama Film</p>
                </div>
                <div className="daftar-movie col-6 col-md-4 col-lg-3">
                <img src="venom3.jpg" alt />
                <p>Nama Film</p>
                </div>
                <div className="daftar-movie col-6 col-md-4 col-lg-3">
                <img src="venom3.jpg" alt />
                <p>Nama Film</p>
                </div>
                <div className="daftar-movie col-6 col-md-4 col-lg-3">
                <img src="venom3.jpg" alt />
                <p>Nama Film</p>
                </div>
            </div>
            <div className="pagination" />
            </div>
        </div>
        </div>
    </div>
</div>

    )
}

export default Detailfilm