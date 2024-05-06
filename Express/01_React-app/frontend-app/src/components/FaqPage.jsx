import React from 'react';

const FaqPage = () => {
    return (
        <main className="page faq-page">
            <section className="clean-block clean-faq dark">
                <section className="py-5 bg-light">
                    <h1 className="text-center text-success" style={{ paddingTop: "15px", paddingBottom: "15px", color: "#1b6ce5!important" }}>FAQ</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xl-12 offset-md-3 offset-xl-0">
                                <div id="faqlist" className="accordion accordion-flush">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header"><button className="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-1">How To Register ?</button></h2>
                                        <div id="content-accordion-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <p className="accordion-body"><strong>Use Registration</strong><br /><br />Step 1: To Register the customer portal to avail the various services - Select the login &gt; customer login page in the home page<br /><br /><br /><br />Step 2: Once clicking on the customer login page. Select 'Click here to Register' since the account is not registered.<br /><br /><br /><br />Step 3: Now provide the Account ID, if unaware 'Click on find out Account ID' where reference bill is attached to find ID<br /><br /><br /><br />Step 4: Once customer provides the Account ID, registration page will appear and customer need to fill all the personal details which are mandatory<br /><br /><br /><br />Step 5: Provide the User ID and Password respectively which should be unique, confirm the password and click save and continue.<br /><br /><br /><br />Step 6: Provide the date of birth and select the security questions as per your desire. Provide the answer which selected.<br /><br />Step 7: Click on the terms and conditions of the registration and submit.<br /><br /><br /><br />Step 8: Once customer submitted the form, confirmation page will be displayed and your user credentials will be sent through the email which is provided while registration.</p>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header"><button className="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-2">What is Lorem Ipsum?</button></h2>
                                        <div id="content-accordion-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <p className="accordion-body"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header"><button className="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-3">What is Lorem Ipsum?</button></h2>
                                        <div id="content-accordion-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <p className="accordion-body"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header"><button className="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-4">What is Lorem Ipsum?</button></h2>
                                        <div id="content-accordion-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <p className="accordion-body"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header"><button className="btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content-accordion-5">What is Lorem Ipsum?</button></h2>
                                        <div id="content-accordion-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <p className="accordion-body"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default FaqPage;