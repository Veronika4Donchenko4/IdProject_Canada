import React from 'react'
import InstallationImg1 from '../assets/images/home-page/installation-img1.jpg';
import InstallationImg2 from '../assets/images/home-page/installation-img2.jpg';

const Faq = () => {
    return (
        <div>
            {/* <!-- =========================== Section REPAIR & INSTALLATION ====================== --> */}

            <div className="container">
                <div className="row faq-sec-Row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 installation-img-group">
                        <img className="installation-img1 img-animation-style4 reveal"
                            src={InstallationImg1} alt="installation-img1" />
                        <img className="installation-img2 img-animation-style2 reveal"
                            src={InstallationImg2} alt="installation-img2" />
                        <div className="yerOfExperi">
                            <h2>12+</h2>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="quality-main about-qulity-main fade_down">
                            <p className="quality">REPAIR & INSTALLATION</p>
                        </div>
                        <h2 className="handyman-text fade_down">Frequently asked questions</h2>
                        <p className="fusce fade_down">Feugiat cursus et morbi sit nunc varius. Tristique pharetra tortor
                            ultrices accumsan egestas ullamcorper varius quam sit velit donec eu.
                        </p>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How often should I have my plumbing inspected?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras
                                        ornare arcu. Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt.
                                        Augue neque gravida in fermentum et sollicitudin.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How do I choose the right masonry contractor?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras
                                        ornare arcu. Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt.
                                        Augue neque gravida in fermentum et sollicitudin.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What are some signs that masonry work needs repair?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras
                                        ornare arcu. Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt.
                                        Augue neque gravida in fermentum et sollicitudin.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        What should I do if my toilet is constantly running?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras
                                        ornare arcu. Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt.
                                        Augue neque gravida in fermentum et sollicitudin.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed mb-0" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Do you offer eco-friendly or sustainable options for your services?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras
                                        ornare arcu. Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt.
                                        Augue neque gravida in fermentum et sollicitudin.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Faq