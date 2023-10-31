import React, { Component } from "react";
import "./Certifications.css";
import { certifications } from "../../portfolio";
import { Fade } from "react-reveal";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Certifications
            </h1>
            <p
              style={{
                textAlign: "center",
              }}
            >
              I made use of certifications in my learning process to acquire my
              tech skills. Here are some of my certifications.
            </p>
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert) => {
            return <CertificationCard certificate={cert} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
