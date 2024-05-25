import React from 'react';

function ContactUsPage() {
    return (
        <main className="page contact-us-page">
            <section className="clean-block clean-form dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">Contact Us</h2>
                        <p><br /><span style={{ color: 'rgb(51, 51, 51)', backgroundColor: 'rgb(255, 255, 255)' }}>O/o Managing Director</span><br /><br /></p>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Designation</th>
                                        <th>Office Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Managing Director</td>
                                        <td>Corporate Office, HESCOM, Navanagar, P.B Road, Hubballi-580025</td>
                                    </tr>
                                    <tr>
                                        <td>Technical Assistant</td>
                                        <td>Corporate Office, HESCOM, Navanagar, P.B Road, Hubballi-580025</td>
                                    </tr>
                                    <tr>
                                        <td><span style={{ backgroundColor: 'rgb(249, 249, 249)' }}>Senior Personal Secretary</span></td>
                                        <td><span style={{ backgroundColor: 'rgb(249, 249, 249)' }}>Corporate Office, HESCOM, Navanagar, P.B Road, Hubballi-580025</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ContactUsPage;