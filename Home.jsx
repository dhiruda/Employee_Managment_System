import React from "react";
import "./Home.css";

export default function Home() {
  const slides = [
    {
      img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      title: "Welcome to Employee Management System",
      desc: "Efficiently manage all your employees in one platform.",
    },
    {
      img: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
      title: "Track Performance & Attendance",
      desc: "Monitor employee performance and attendance effortlessly.",
    },
    {
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      title: "Simplified HR Management",
      desc: "Streamline HR tasks and improve productivity.",
    },
  ];

  return (
    <div className="home-carousel">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        {/* Indicators */}
        <div className="carousel-indicators custom-indicators">
          {slides.map((_, index) => (
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              key={index}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={slide.img}
                className="d-block w-100 carousel-full-img"
                alt={slide.title}
              />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start">
                <h1 className="carousel-title">{slide.title}</h1>
                <p className="carousel-desc">{slide.desc}</p>
                <div>
                  <a href="/login" className="btn btn-primary me-3 btn-lg">
                    Login
                  </a>
                  <a href="/register" className="btn btn-outline-light btn-lg">
                    Register
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon custom-control"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon custom-control"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
