// import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import IMG1 from "../assets/Australian Dollar (AUD)  coin.jpg"
import IMG2 from "../assets/Bahrain Dinar (BHD) coin.jpeg"
import IMG3 from "../assets/Omani Rial  coin.jpeg"
import IMG4 from "../assets/Euro (EUR) coin.png"
import IMG5 from "../assets/images.jpeg"
import IMG6 from "../assets/Cayman Islands Dollar coin.jpg"
import IMG7 from "../assets/Jordanian Dinar (JOD) coin.webp"
import IMG8 from "../assets/Kuwaiti Dinar (KWD) coin.jpg"
import IMG9 from "../assets/United States Dollar (USD)  coin.jpg"
const Details = () => {
    return (
        <div className="container details-main-container  ">
             <h1 className="fw-bold  process-h1 text-center">Top 10 most valuable currencies</h1>
            <div className="row details-row py-5">
                <div className="col-lg-4  details-subrow">
                    <img
                        className="bd-placeholder-img rounded-circle"
                        width={140}
                        height={140}
                        src={IMG9}
                    />
                    <h2 className="fw-normal details-h2 mt-2">Kuwaiti Dinar (KWD)</h2>
                    <p>
                        Some representative placeholder content for the three columns of text
                        below the carousel. This is the first column.
                    </p>
                </div>
                <div className="col-lg-4  details-subrow">
                <img
                        className="bd-placeholder-img rounded-circle"
                        width={140}
                        height={140}
                        src={IMG8}
                    />
                    <h2 className="fw-normal details-h2 mt-2">Bahrain Dinar (BHD)</h2>
                    <p>
                        Another exciting bit of representative placeholder content. This time,
                        weve moved on to the second column.
                    </p>
                </div>
                <div className="col-lg-4  details-subrow">
                <img
                        className="bd-placeholder-img rounded-circle"
                        width={140}
                        height={140}
                        src={IMG7}
                    />
                    <h2 className="fw-normal details-h2 mt-2">Omani Rial (OMR)</h2>
                    <p>
                        And lastly this, the third column of representative placeholder content.
                    </p>
                    
                </div>
            </div>
            {/* row-2 */}
            <div className="row details-row py-5">
                <div className="col-lg-4  details-subrow">
                <img
                        className="bd-placeholder-img rounded-circle"
                        width={140}
                        height={140}
                        src={IMG6}
                    />
                    <h2 className="fw-normal details-h2 mt-2">Euro (EUR)</h2>
                    <p>
                        Some representative placeholder content for the three columns of text
                        below the carousel. This is the first column.
                    </p>
                </div>
                <div className="col-lg-4  details-subrow">
                <img
                        className="bd-placeholder-img rounded-circle"
                        width={140}
                        height={140}
                        src={IMG5}
                    />
                    <h2 className="fw-normal details-h2 mt-2">United States Dollar (USD)</h2>
                    <p>
                        Another exciting bit of representative placeholder content. This time,
                        weve moved on to the second column.
                    </p>
                </div>
                <div className="col-lg-4  details-subrow">
                <img
                        className="bd-placeholder-img rounded-circle"
                        width={140}
                        height={140}
                        src={IMG4}
                    />
                    <h2 className="fw-normal details-h2 mt-2">Canadian Dollar (CAD)</h2>
                    <p>
                        And lastly this, the third column of representative placeholder content.
                    </p>
                </div>
            </div>
            {/* row-3 */}
            <div className="row details-row py-5">
                <div className="col-lg-4  details-subrow">
                <img
                        className="bd-placeholder-img rounded-circle"
                        width={140}
                        height={140}
                        src={IMG3}
                    />
                    <h2 className="fw-normal details-h2 mt-2">Australian Dollar (AUD)</h2>
                    <p>
                        Some representative placeholder content for the three columns of text
                        below the carousel. This is the first column.
                    </p>
                </div>
                <div className="col-lg-4  details-subrow">
                <img
                        className="bd-placeholder-img rounded-circle"
                        width={140}
                        height={140}
                        src={IMG2}
                    />
                    <h2 className="fw-normal details-h2 mt-2">Cayman Islands Dollar (CID)</h2>
                    <p>
                        Another exciting bit of representative placeholder content. This time,
                        weve moved on to the second column.
                    </p>
                </div>
                <div className="col-lg-4  details-subrow">
                <img
                        className="bd-placeholder-img rounded-circle"
                        width={140}
                        height={140}
                        src={IMG1}
                    />
                    <h2 className="fw-normal details-h2 mt-2">Jordanian Dinar (JOD)</h2>
                    <p>
                        And lastly this, the third column of representative placeholder content.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Details
