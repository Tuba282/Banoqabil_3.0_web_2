// import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import IMG from "../assets/bg1.jpg"
// import FONT from "../assets/Hey Comic.ttf"


const Home = () => {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="main.css" />
  <div className="container main_body">
    <nav className="navbar justify-content-center">
      <div className="container-fluid">
        <a className="navbar-brand mt-2 " style={{color:" #715dbb"}} href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={70}
            height={70}
            viewBox="0 0 48 48"
          >
            <g fill="#715dbb" fillRule="evenodd" clipRule="evenodd">
              <path d="M37.973 27.975A12.94 12.94 0 0 0 40 21c0-7.18-5.82-13-13-13c-2.567 0-4.96.744-6.975 2.027a17 17 0 0 0-3.954.698A14.96 14.96 0 0 1 27 6c8.284 0 15 6.716 15 15a14.96 14.96 0 0 1-4.725 10.929c.381-1.263.62-2.587.697-3.954" />
              <path d="M39.933 28.603a15 15 0 0 1-2.658 3.326c.381-1.263.62-2.587.697-3.954A12.94 12.94 0 0 0 40 21c0-7.18-5.82-13-13-13c-2.567 0-4.96.744-6.975 2.027a17 17 0 0 0-3.954.698a15 15 0 0 1 3.326-2.658A14.93 14.93 0 0 1 27 6c8.284 0 15 6.716 15 15q0 .226-.007.451a14.9 14.9 0 0 1-2.06 7.152" />
              <path d="M36 27c0 8.284-6.716 15-15 15S6 35.284 6 27s6.716-15 15-15s15 6.716 15 15m-16-5a2 2 0 1 0 0 4zm2-2v-1h-2v1a4 4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4 4 0 0 0 20 34v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666A4 4 0 0 0 22 20m0 8v4a2 2 0 1 0 0-4" />
            </g>
          </svg>
          CC:currency converter
        </a>
      </div>
    </nav>
    {/* main part */}
    <div className="row mb-8">
      <div className="top-text col-md-5 text-center">
        <div className="h-100 p-5 rounded-3">
          <h2 className="cc-text">CC:Currency Converter</h2>
          <p>
            This currency converter is a tool that allows you convert the value
            of one currency into another. It is particularly useful for
            travelers, investors, and businesses engaged in international
            transactions. By inputting an amount in a specific currency, you can
            quickly see its equivalent value in another currency based on
            current exchange rates.
          </p>
          <button className="btn " >
            Get Started
          </button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100">
          <img src={IMG} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Home
