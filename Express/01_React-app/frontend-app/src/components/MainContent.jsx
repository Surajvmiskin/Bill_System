import React from 'react';
import { Link } from 'react-router-dom';
const MainContent = () => {
    return (
        <main className="page landing-page">
            <section className="clean-block clean-hero" style={{ backgroundImage: "url('/img/tech/Electricity.jpg')", color: "rgba(9, 162, 255, 0.85)" }}>
                <div className="text">
                    <h2>Electricity Consumption Tracking & Billing System Projectss</h2>
                    <button className="btn btn-outline-light btn-lg info" type="button"><Link className="nav-link active" to="/payment-gateway">Bill Track</Link></button>
                </div>
            </section>
            <section className="clean-block clean-info dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info" id="info">Info</h2>
                        <p>Efficient electricity management is crucial for optimizing energy usage, reducing costs, and minimizing environmental impact. By effectively monitoring and controlling electricity consumption, individuals and organizations can</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="card-group">
                            <div className="card">
                                <img className="card-img-top w-100 d-block img-fluid" src="/img/clipboard-image.png" alt="Save Money" width="338" height="260" />
                                <div className="card-body">
                                    <h4 className="card-title">Save Money</h4>
                                    <p className="card-text">Implementing efficient electricity management practices can lead to significant cost savings by reducing energy waste and lowering utility bills.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top w-100 d-block img-fluid" src="/img/clipboard-image-1.png" alt="Conserve Resources" width="338" height="255" />
                                <div className="card-body">
                                    <h4 className="card-title">Conserve Resources</h4>
                                    <p className="card-text">Electricity generation often relies on finite resources such as fossil fuels. By managing electricity usage efficiently, we can conserve these resources for future generations.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top w-100 d-block" src="/img/clipboard-image-2.png" alt="Enhance Sustainability" />
                                <div className="card-body">
                                    <h4 className="card-title">Enhance Sustainability</h4>
                                    <p className="card-text">Sustainable energy management practices promote the use of renewable energy sources and minimize reliance on non-renewable resources, ensuring a more sustainable energy future.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainContent;