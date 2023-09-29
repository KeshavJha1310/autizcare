import React, { useCallback } from "react";
import "./welcome.css";
const Welcome = () => {
  const onRectangleButtonClick = useCallback(() => {
    // Please sync "Desktop - 2" to the project
  }, []);

  const onPatientTextClick = useCallback(() => {
    // Please sync "Desktop - 2" to the project
  }, []);

  const onTherapistTextClick = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  }, []);

  return (
    <div className="signUp">
      <div className="frame">
        <div className="frame1">
          <canvas className="frame-child" />
          <div className="frame2">
            <div className="frame-item" />
          </div>
        </div>
        <div className="frame3">
          <div className="frame4">
            <div className="frame5">
              <div className="autizcare">
                <span className="autizcare-txt">
                  <span>{`  `}</span>
                  <span className="autizcare1">AUTIZCARE</span>
                </span>
              </div>
            </div>
            <div className="frame6">
              <div className="component-4">
                <div className="helping-you-heal">Helping you heal</div>
                <div className="with-ease-each-day-every-day-wrapper">
                  <div className="with-ease-each-container">
                    <p className="with-ease">with ease</p>
                    <p className="with-ease">each day</p>
                    <p className="with-ease">every day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame7">
        <div className="frame8">
          <div className="frame9">
            <h1 className="welcome">WELCOME</h1>
          </div>
        </div>
        <div className="frame10">
          <div className="frame11">
            <label className="frame12">
              <div className="get-started">Get started</div>
            </label>
          </div>
          <div className="frame13">
            <button className="component-3">
              <button
                className="component-3-child"
                onClick={onRectangleButtonClick}
              />
              <div className="patient" onClick={onPatientTextClick}>
                Patient
              </div>
            </button>
            <button className="component-2">
              <button className="component-2-child" />
              <div className="therapist" onClick={onTherapistTextClick}>
                Therapist
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Welcome;
