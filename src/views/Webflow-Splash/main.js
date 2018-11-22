import React from 'react';
import './assets/css/style.webflow.css';
// import backgroundVideo from '../../assets/videos/background-video.mp4';
// import backgroundPoster from '../../assets/images/splash-background-video-poster.jpg';

class Splash extends React.Component {
  render() {
    return (
      <div>
        <div id="Down" className="section blue">
          <div className="container-fluid">
            <div className="about-wrapper">
              <div className="top-title less-space">
                <div className="align-center">
                  <div>
                    <h4 className="top-heading">More About calixfer</h4>
                    <h1>About Us<span className="bolder">.</span></h1>
                  </div>
                </div>
              </div>
              <div>
                <p>Do you know where you want to go to school, but not sure what to study? Or maybe you know just want to know the course requirements for your desired major at the best school? Or maybe, you just want to know what your options are based on your expected transfer GPA? We can answer each of these questions easily &amp; graphically.</p>
              </div>
              <div className="top-margin more"><a href="/" className="button w-button">lets do it!</a></div>
            </div>
          </div>
        </div>
        <div className="section gray more shadow">
          <div className="container-fluid">
            <div className="top-title">
              <div className="align-center">
                <div>
                  <h4 className="top-heading dark">TRANSFER student</h4>
                  <h1 className="dark with-color-background">Testimonials<span className="bolder">.</span></h1>
                </div>
              </div>
            </div>
            <div>
              <div data-delay="4000" dataAnimation="slide" dataAutoplay="1" dataNavSpacing="4" dataDuration="500" dataInfinite="1" className="testi-slider w-slider">
                <div className="w-slider-mask">
                  <div className="slide w-slide">
                    <div className="w-row">
                      <div className="w-col w-col-6">
                        <div className="testi-wrapper card">
                          <div className="testi-icon center" />
                          <div>
                            <p>Calixfer has the best graphics for showing all the majors across the all universities. Super helpful! </p>
                          </div>
                          <div>
                            <h4 className="testi-name">Bobby Axelrod</h4>
                          </div>
                          <h5 className="project-type in-testi">Transfered to UC San Diego</h5>
                        </div>
                      </div>
                      <div className="w-col w-col-6">
                        <div>
                          <div className="testi-wrapper card">
                            <div className="testi-icon photo-2 center" />
                            <div>
                              <p>Wow! I wasn&#x27;t sure what my options were with my GPA, and Calixfer gave me the answer so easily.</p>
                            </div>
                            <div>
                              <h4 className="testi-name">Kate Casio</h4>
                            </div>
                            <h5 className="project-type in-testi">Transfered to CSU Sacramento</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-slide">
                    <div className="w-row">
                      <div className="w-col w-col-6">
                        <div className="testi-wrapper card">
                          <div className="testi-icon center" />
                          <div>
                            <p>Getting into Cal was the most important goal. But I didn&#x27;t know what to study. Calixfer gave me all the ideas I needed.</p>
                          </div>
                          <div>
                            <h4 className="testi-name">Maxwell Cruise</h4>
                          </div>
                          <h5 className="project-type in-testi">Transfered to UC Berkeley</h5>
                        </div>
                      </div>
                      <div className="w-col w-col-6">
                        <div>
                          <div className="testi-wrapper card">
                            <div className="testi-icon photo-2 center" />
                            <div>
                              <p>I wanted to know which courses at JC would satisfy requirements at different majors across all Universities. Calixfer shows this really well. </p>
                            </div>
                            <div>
                              <h4 className="testi-name">Fjory Ford</h4>
                            </div>
                            <h5 className="project-type in-testi">Transfered to UC Davis</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-slide">
                    <div className="w-row">
                      <div className="w-col w-col-6">
                        <div className="testi-wrapper card">
                          <div className="testi-icon center" />
                          <div>
                            <p>Calixfer helped me plan my course requirements for the best collection of transfer options. So easy to know what&#x27;s next.</p>
                          </div>
                          <div>
                            <h4 className="testi-name">Justin Smart</h4>
                          </div>
                          <h5 className="project-type in-testi">Transfered to CalPoly</h5>
                        </div>
                      </div>
                      <div className="w-col w-col-6">
                        <div>
                          <div className="testi-wrapper card">
                            <div className="testi-icon photo-2 center" />
                            <div>
                              <p>Wow! Assist needed a new website. So helpful. Saves so much time. Easily able to see all my transfer options in one place.</p>
                            </div>
                            <div>
                              <h4 className="testi-name">Lucy Mitchell</h4>
                            </div>
                            <h5 className="project-type in-testi">London Creative Agency</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-nav w-slider-nav w-slider-nav-invert w-round" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Splash;
