import { useCallback } from "react";
import "./welcome.css";

const Welcome = () => {
  const onFrameContainer1Click = useCallback(() => {
    // Please sync "Log In" to the project
  }, []);

  const onPatientTextClick = useCallback(() => {
    // Please sync "Sign Up" to the project
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  }, []);

  const onTherapistTextClick = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  }, []);

  return (
    <div className="welcome">
      <div className="frame">
        <div className="autizcare">AUTIZCARE</div>
      </div>
      <div className="frame1">
        <h1 className="welcome1">WELCOME</h1>
        <div className="frame2">
          <div className="get-started">Get started</div>
          <div className="frame3">
            <div className="frame4" onClick={onFrameContainer1Click}>
              <button className="frame-child" />
              <div className="patient" onClick={onPatientTextClick}>
                Patient
              </div>
            </div>
            <div className="frame4" onClick={onFrameContainer2Click}>
              <button className="frame-child" />
              <div className="patient" onClick={onTherapistTextClick}>
                Therapist
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
