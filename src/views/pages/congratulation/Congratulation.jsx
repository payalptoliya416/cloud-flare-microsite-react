import React, { useState } from "react";
import { JourneyModal } from "../../modals/passport";

function Congratulation() {
    const [journeyVisible, setJourneyVisible] = useState(false)
  return (
    <>
      <div className="main ">
        <section>
          <div className="passport-logo">
            <img
              src="/assets/image/logoone.png"
              alt=""
              className="mx-auto micro-one"
            />
            <img
              src="/assets/image/logosec.png"
              alt=""
              className="mx-auto micro-sec"
            />
            <div className="gift-icon">
              <img
                src="/assets/image/Gift icon0.png"
                alt="Gift Icon"
                onClick={() => setJourneyVisible(true)}
              />
            </div>
          </div>
          <div className="container">
            <div className="congras-info">
                <h3>Congratulations!
                </h3>
                <img src="/assets/image/congras.png" alt="" />
                <p><strong>Youʼre eligible for a chance <br/>
                </strong>to win our<strong>Grand Prize!</strong></p>
            </div>
            <div className="congrats-data">
                <div className="row">
                    <div className="col-4 pe-0">
                        <div className="prize-info h-100">
                            <button className="btn">Grand Prize
                            </button>
                            <img src="/assets/image/prize1.png" alt="" />
                            <h3>Airwheel <br/> Luggage</h3>
                        </div>
                    </div>
                    <div className="col-4 pe-0">
                        <div className="prize-info h-100">
                            <button className="btn">2nd Prize </button>
                            <img src="/assets/image/prize2.png" alt="" />
                            <h3>Ray-Ban Meta
                            <br/> Smart Glasses
                            </h3>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="prize-info h-100">
                            <button className="btn">3rd Prize
                            </button>
                            <img src="/assets/image/prize3.png" alt="" />
                            <h3>XiaoMi <br/> Vacuum Robot
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </div>
       {journeyVisible && <JourneyModal show={journeyVisible} handleClose={setJourneyVisible} />}
    </>
  );
}

export default Congratulation;
