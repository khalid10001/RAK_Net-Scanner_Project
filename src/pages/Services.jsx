import '../css/services.css'
import photho from '../img/services.png'
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Layout from "../component/Layout";

const services = () => {
    return (
        <Layout title={"Services | RAK"}>
            <div className="services-container">
                <Navbar/>
                <main className="services-section">


                    <div className="column column1">
                        <h2>Web Application</h2>
                        <p>Since web applications are the most sought-after target for attackers, we perform in-depth
                            testing
                            for every functionality of the app, focusing on exploitable vulnerabilities. You get a
                            detailed
                            report with manually validated findings, steps to exploit them, and recommendations for
                            fixing.</p>

                        <h2>Internal Network</h2>
                        <p>An “assume breach” scenario simulates an attacker who already has access to your internal
                            network
                            but no privileges. In this case, we first try to obtain regular user domain accounts and
                            then
                            escalate our privileges to obtain Domain Admin rights. The report you get describes the
                            successful
                            attack paths and provides remediation advice.</p>
                    </div>


                    <div className="column column2">
                        <img src={photho} alt="Services Image"/>
                    </div>


                    <div className="column column3">
                        <h2>External Network</h2>
                        <p>We simulate the tactics an external attacker would use to breach the network perimeter and
                            reach
                            the internal network. This test evaluates all Internet-exposed devices and services to
                            detect
                            and
                            exploit misconfigurations, outdated software, weak passwords, and other types of
                            vulnerabilities.</p>

                        <h2>Red Teaming</h2>
                        <p>We combine technical attack vectors with social engineering and physical infiltration tactics
                            to
                            simulate a realistic attack against your entire organization. Our goal is to test how
                            effective
                            your security controls are and find which attack paths can compromise your company's crown
                            jewels.
                            Naturally, we also provide actionable advice on how to strengthen your security posture.</p>
                    </div>

                </main>
                <Footer/>
            </div>
        </Layout>
    )
}
export default services;