import React from 'react'
import registerImg from '../assets/images/svg/register.svg';
import inspectImg from '../assets/images/svg/inspect.svg';
import workProcessImg from '../assets/images/svg/workProcess.svg';
import handoverImg from '../assets/images/svg/handover.svg';

const OurProcess = () => {
    return (
        <>
            <section className="section-five" >
                <div className="container">
                    <div className="quality-main ourProcess fade_down">
                        <p className="quality">our process</p>
                    </div>
                    <h2 className="handyman-text quick fade_down">Easy quick following steps</h2>
                    <p className="fusce malesuada elementum fade_down">Ridiculus eu facilisi habitasse leo elementum phasellus
                        egestas arcu. Urna pretium et nec eu viverra lacinia vitae. Est volutpat egestas libero viverra.
                    </p>
                    <div className="row step-box-row">
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                            <div className="steps-box-main flip_left">
                                <div className="number-circel">1</div>
                                <div className="steps-box">
                                    <div className="register-img-main">
                                        <img className="register" src={registerImg} alt="register" />
                                    </div>
                                    <h2 className="Register-text">Register For Work</h2>
                                    <p className="proin">Sed sollicitudin faucibus proin id magna pellentesque in lobortis
                                        pellentesque. Sed a nec proin tellus dictumst euismod pellentesque ac.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                            <div className="steps-box-main flip_left">
                                <div className="number-circel">2</div>
                                <div className="steps-box">
                                    <div className="register-img-main">
                                        <img className="register" src={inspectImg} alt="inspect" />
                                    </div>
                                    <h2 className="Register-text">Inspect & Analyze</h2>
                                    <p className="proin">Eu ante ultrices congue dui ridiculus ut sit vitae. Turpis non
                                        porttitor lobortis faucibus tincidunt. Sed sem sit in in. Ullamcorper laoreet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                            <div className="steps-box-main flip_left">
                                <div className="number-circel">3</div>
                                <div className="steps-box">
                                    <div className="register-img-main">
                                        <img className="register" src={workProcessImg} alt="workProcess" />
                                    </div>
                                    <h2 className="Register-text">Work Processing</h2>
                                    <p className="proin">Vivamus quis duis mattis cursus augue. In sollicitudin risus mollis et.
                                        Mauris id tristique pulvinar vitae volutpat vulputate a. Ullamcorper.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                            <div className="steps-box-main flip_left">
                                <div className="number-circel">4</div>
                                <div className="steps-box">
                                    <div className="register-img-main">
                                        <img className="register" src={handoverImg} alt="handover" />
                                    </div>
                                    <h2 className="Register-text">Handover Clients</h2>
                                    <p className="proin">Ut tincidunt orci arcu feugiat hendrerit sit venenatis id. Non etiam
                                        senectus lacus scelerisque eget dui lacus. Purus mauris a sed aliquam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurProcess