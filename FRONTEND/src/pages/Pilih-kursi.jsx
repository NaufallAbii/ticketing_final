<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../contexts/BookingContext';
import '../styles/Pilih-Kursi.css';

function PilihKursi () {
    const navigate = useNavigate();
    const { theater, schedule, updateSeats } = useBooking();
    
  // State for selected seats and pricing
  const [selectedSeats, setSelectedSeats] = useState([]);
  const pricePerSeat = 40000; // Price for each seat

=======
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Pilih-Kursi.css'

function PilihKursi () {
    const navigate = useNavigate()
    
>>>>>>> 62a42647232249849df32daa590cc2148c4c324f
    const goToProfile = () => {
          navigate('/profile', {
          state: { from: '/pilih-kursi'}
            })
    }

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

<<<<<<< HEAD
         // Handle seat selection logic
        const handleSeatClick = (seat) => {
          setSelectedSeats((prevSeats) => {
            if (prevSeats.includes(seat)) {
              return prevSeats.filter((s) => s !== seat); // Deselect the seat
            } else {
              return [...prevSeats, seat]; // Select the seat
            }
          });
        };

        // Confirm seat selection and save to context
        const handleConfirmSeats = () => {
          updateSeats(selectedSeats);  // Update selected seats in the context
          navigate('/pembayaran');     // Navigate to payment page
        };

    return (
      <div>
      {/* Header */}
      <div className="header">
=======
    return (
        <div>
  <div className="header">
>>>>>>> 62a42647232249849df32daa590cc2148c4c324f
    <div className="d-flex align-items-center">
      <div className="hamburger-menu" onClick={toggleSidebar}>
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
      <span onClick={goToProfile} className="text-decoration-none text-reset d-flex" style={{cursor: 'pointer'}}>
            <i className="fas fa-user-circle fa-2x"></i>
<<<<<<< HEAD
               <span className="align-self-center">profile</span>
      </span>
      </div>
    </div>
  </div>

      {/* Main Content */}
      <div className="d-flex">
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarActive ? "active" : ""}`} id="sidebar">
=======
            <span className="align-self-center">profile</span>
        </span>
      </div>
    </div>
  </div>
  <div className="d-flex">
            {/* Sidebar */}
            <div className={`sidebar ${isSidebarActive ? "active" : ""}`} id="sidebar">
>>>>>>> 62a42647232249849df32daa590cc2148c4c324f
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
<<<<<<< HEAD

        {/* Seat Selection */}
        <div className="flex-grow-1">
          <div className="main-content">
            <div className="d-flex text flex-column justify-content-center border border-secondary">
              <h1 className="m-3">Pilih Kursi</h1>

              <div className="bioskop d-flex flex-column p-3">
                <div className="m-3 border mb-4 layar"><p>Layar</p></div>
                <div className="d-flex flex-row">
                  {/* Left Side Seats */}
                  <div className="col-md-6 me-2">
                    {['A', 'B', 'C', 'D', 'E'].map((row) => (
                      <div key={row}>
                        {[1, 2, 3, 4, 5].map((col) => {
                          const seat = `${row}${col}`;
                          return (
                            <button
                              key={seat}
                              className={`btn p-2 m-1 ${selectedSeats.includes(seat) ? 'btn-success' : 'btn-outline-secondary'}`}
                              onClick={() => handleSeatClick(seat)}
                            >
                              {seat}
                            </button>
                          );
                        })}
                      </div>
                    ))}
                  </div>

                  {/* Right Side Seats */}
                  <div className="col-md-6 ms-2">
                    {['A', 'B', 'C', 'D', 'E'].map((row) => (
                      <div key={row}>
                        {[6, 7, 8, 9, 10].map((col) => {
                          const seat = `${row}${col}`;
                          return (
                            <button
                              key={seat}
                              className={`btn p-2 m-1 ${selectedSeats.includes(seat) ? 'btn-success' : 'btn-outline-secondary'}`}
                              onClick={() => handleSeatClick(seat)}
                            >
                              {seat}
                            </button>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Summary */}
              <div className="container p-3 mb-3 border border-secondary">
        <div className="border-bottom"><h2>Detail Pesanan</h2></div>
        <div className="d-flex mt-3 detail-kursi">
          <div className="me-auto">
            <p>Bioskop</p>
            <p>Waktu</p>
            <p>Pilihan Kursi</p>
            <p>Harga Tiket</p>
          </div>
          <div>
            <p>{theater || "Belum dipilih"}</p> {/* Show theater dynamically */}
            <p>{schedule || "Belum dipilih"}</p> {/* Show schedule dynamically */}
            <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'Belum ada kursi'}</p>
            <p>Rp. {selectedSeats.length * pricePerSeat}</p>
          </div>
        </div>
      </div>

              {/* Confirm Button */}
              <div className="konfirm p-2">
                <button onClick={handleConfirmSeats} className="btn btn-outline-danger mb-3">
                  Konfirmasi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PilihKursi;
=======
    <div className="flex-grow-1">
      <div className="main-content">
        <div className="d-flex text flex-column justify-content-center border border-secondary">
          <div>
            <h1 className="m-3">Pilih Kursi</h1>
          </div>
          <div className="bioskop d-flex flex-column p-3">
            <div className="m-3 border mb-4 layar">
              <p>Layar</p>
            </div>
            <div className="d-flex flex-row">
              <div className="col-md-6 me-2">
                <div>
                  <button className="btn btn-outline-secondary p-2">A1</button>
                  <button className="btn btn-outline-secondary p-2">A2</button>
                  <button className="btn btn-outline-secondary p-2">A3</button>
                  <button className="btn btn-outline-secondary p-2">A4</button>
                  <button className="btn btn-outline-secondary p-2">A5</button>
                </div>
                <div>
                  <button className="btn btn-outline-secondary p-2">B1</button>
                  <button className="btn btn-outline-secondary p-2">B2</button>
                  <button className="btn btn-outline-secondary p-2">B3</button>
                  <button className="btn btn-outline-secondary p-2">B4</button>
                  <button className="btn btn-outline-secondary p-2">B5</button>
                </div>
                <div>
                  <button className="btn btn-outline-secondary p-2">C1</button>
                  <button className="btn btn-outline-secondary p-2">C2</button>
                  <button className="btn btn-outline-secondary p-2">C3</button>
                  <button className="btn btn-outline-secondary p-2">C4</button>
                  <button className="btn btn-outline-secondary p-2">C5</button>
                </div>
                <div>
                  <button className="btn btn-outline-secondary p-2">D1</button>
                  <button className="btn btn-outline-secondary p-2">D2</button>
                  <button className="btn btn-outline-secondary p-2">D3</button>
                  <button className="btn btn-outline-secondary p-2">D4</button>
                  <button className="btn btn-outline-secondary p-2">D5</button>
                </div>
                <div>
                  <button className="btn btn-outline-secondary p-2">E1</button>
                  <button className="btn btn-outline-secondary p-2">E2</button>
                  <button className="btn btn-outline-secondary p-2">E3</button>
                  <button className="btn btn-outline-secondary p-2">E4</button>
                  <button className="btn btn-outline-secondary p-2">E5</button>
                </div>
              </div>
              <div className="col-md-6 ms-2">
                <div>
                  <button className="btn btn-outline-secondary p-2">A6</button>
                  <button className="btn btn-outline-secondary p-2">A7</button>
                  <button className="btn btn-outline-secondary p-2">A8</button>
                  <button className="btn btn-outline-secondary p-2">A9</button>
                  <button className="btn btn-outline-secondary p-2">A10</button>
                </div>
                <div>
                  <button className="btn btn-outline-secondary p-2">B6</button>
                  <button className="btn btn-outline-secondary p-2">B7</button>
                  <button className="btn btn-outline-secondary p-2">B8</button>
                  <button className="btn btn-outline-secondary p-2">B9</button>
                  <button className="btn btn-outline-secondary p-2">B10</button>
                </div>
                <div>
                  <button className="btn btn-outline-secondary p-2">C6</button>
                  <button className="btn btn-outline-secondary p-2">C7</button>
                  <button className="btn btn-outline-secondary p-2">C8</button>
                  <button className="btn btn-outline-secondary p-2">C9</button>
                  <button className="btn btn-outline-secondary p-2">C10</button>
                </div>
                <div>
                  <button className="btn btn-outline-secondary p-2">D6</button>
                  <button className="btn btn-outline-secondary p-2">D7</button>
                  <button className="btn btn-outline-secondary p-2">D8</button>
                  <button className="btn btn-outline-secondary p-2">D9</button>
                  <button className="btn btn-outline-secondary p-2">D10</button>
                </div>
                <div>
                  <button className="btn btn-outline-secondary p-2">E6</button>
                  <button className="btn btn-outline-secondary p-2">E7</button>
                  <button className="btn btn-outline-secondary p-2">E8</button>
                  <button className="btn btn-outline-secondary p-2">E9</button>
                  <button className="btn btn-outline-secondary p-2">E10</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container p-3 mb-3 border border-secondary">
            <div className="border-bottom">
              <h2>Detail Pesanan</h2>
            </div>
            <div className="d-flex mt-3 detail-kursi">
              <div className="me-auto">
                <p>Bioskop</p>
                <p>Pilihan Kursi</p>
                <p>Harga Tiket</p>
              </div>
              <div>
                <p><span id="pilihBioskop">Trans Studio Mall</span></p>
                <p><span id="pilihKursi">C3</span></p>
                <p>Rp. <span id="hargaTiket">40.000</span></p>
              </div>
            </div>
          </div>
          <div className="konfirm p-2">
            <button className="btn btn-outline-danger mb-3"><a href="/Pembayaran" className="text-decoration-none text-reset">Konfirmasi</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default PilihKursi
>>>>>>> 62a42647232249849df32daa590cc2148c4c324f
