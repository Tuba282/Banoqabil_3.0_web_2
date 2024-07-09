// import BIGIMG from "./assets/bigImg.png"
import SER from "./assets/values.png"
import MIS from "./assets/mission.png"
import Vis from "./assets/vision.png"
import TEAM from "./assets/team.png"
import GAL_IMG1 from "./assets/gal_img (1).jpeg"
import GAL_IMG2 from "./assets/gal_img (2).jpeg"
import GAL_IMG3 from "./assets/gal_img (3).jpeg"
import GAL_IMG4 from "./assets/gal_img (4).jpeg"
import GAL_IMG5 from "./assets/gal_img (5).jpeg"
import GAL_IMG6 from "./assets/gal_img (6).jpeg"
import GAL_IMG7 from "./assets/gal_img (7).jpeg"
import GAL_IMG8 from "./assets/gal_img (8).jpeg"
import GAL_IMG9 from "./assets/gal_img (9).jpeg"
import GAL_IMG10 from "./assets/gal_img (10).jpeg"
import GAL_IMG11 from "./assets/gal_img (11).jpeg"
import GAL_IMG12 from "./assets/gal_img (12).jpeg"
import FIND_IMG from "./assets/find_img (2).png"
import Header from './assets/components/header.jsx'
import Footer from './assets/components/footer.jsx'
import './App.css'

function App() {

  return (
    <>

      <div className="heroSec">

        <div className="bigImg">
          <Header />

          <div className="cards">

            <div className="box1">
              <img src={SER} />

              <p className="text-center para1">Values</p>
              <p className="text-center para2"> We provide the best service of all the time.</p>
            </div>

            <div className="box2">
              <img src={Vis} />

              <p className="text-center para1">Vision</p>
              <p className="text-center para2">Our vision is to touch the seventh sky .</p>
            </div>

            <div className="box3">
              <img src={MIS} />

              <p className="text-center para1">Mision</p>
              <p className="text-center para2">Our mission is to complete our customer desires </p>
            </div>


          </div>
          {/* cards End */}


          <div className="Services" id="service">
            <div className="ser_img"><img src={TEAM} /></div>
            <div className="ser_text">

              <p className="h1">Our Services</p>
              <p className="h2">
                Without hard work, there is no success in life. An idle person, who is seen relaxing all the time, can never achieve success. It is impossible to reach the height of success without hard work. People always think of shortcuts, but there is no shortcut in lifeWithout hard work, there is no success in life. An idle person, who is seen relaxing all the time, can never achieve success. It is impossible to reach the height of success without hard work. who is seen relaxing all the time, can never achieve success. It is impossible to reach the height of success without hard work. who is seen relaxing all the time, can never achieve success. It is impossible to reach the height of success without hard work.
              </p>
            </div>
          </div>
          {/* Services ends here */}

          <div className="img_gallery">
            <p className="gal_h1" id="about">Our Gallery</p>
            <div className="images1">

              <img src={GAL_IMG1} />
              <img src={GAL_IMG2} />
              <img src={GAL_IMG12} />
              <img src={GAL_IMG4} />
              <img src={GAL_IMG5} />
              <img src={GAL_IMG6} />

            </div>
            <div className="images2">
              <img src={GAL_IMG3} />
              <img src={GAL_IMG8} />
              <img src={GAL_IMG9} />
              <img src={GAL_IMG10} />
              <img src={GAL_IMG11} />
              <img src={GAL_IMG7} />

            </div>
          </div>
          <br /><br /><br />

          {/* <Footer/> */}
          <br /><br /><br />
          <br /><br /><br />
          <br /><br /><br />
          <br /><br /><br />
          <br /><br /><br />
          <br /><br /><br />
          <div className="find_us" id="find_us">
            <div className="find_border">
            <div className="find_img"><img src={FIND_IMG} alt="" /></div>
            <div className="find_inpt">

              <p className="h2">Find Us</p><br /><br />
              <label>Name :</label><input type="text" placeholder="Enter name ..." /><br /><br />
              <label>Email :</label><input type="email" placeholder="Enter email ..." /><br /><br />
              <label>Password :</label><input type="password" placeholder="Enter password ..." /><br /><br />
            </div>
            </div>
          </div>
        <Footer/>
        </div>
      </div>



    </>
  )
}

export default App
