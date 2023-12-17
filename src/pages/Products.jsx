import "../css/Products.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import {Link} from "react-router-dom";
import Layout from "../component/Layout";

const Products = () => {

    return (
        <Layout title={"Products | RAK"}>
            <div className="Product-Container">
                <Navbar/>
                <main className="main-container">
                    <div className="title">What You Can Do with RAK-Tools</div>
                    <p className="paragraph">Built by a team of experienced RAK testers, RAK-Tools is a web-based
                        platform
                        that speeds up the common steps performed in almost every assessment: vulnerability scanning,
                        attacking. Using the 20+ built-in tools, you get quick insights into targets' weaknesses so you
                        know
                        where to dig deeper, pop shells, and have fun.</p>

                    <div className="box box1">
                        <div className="box-left"></div>
                        <div className="box-right">
                            <div className="box-title">Networking Assessment</div>
                            <ul className="bullet-points">
                                <li>Assess the overall security posture of the network.</li>
                                <li>Identify and address vulnerabilities in firewalls, routers, switches, and other
                                    security
                                    devices.
                                </li>
                                <li>Evaluate the security and performance of wireless networks (if applicable).</li>
                            </ul>
                            <Link to="/scanner" className="network-scanner-tag">Network Scanner</Link>
                        </div>
                    </div>

                    <div className="box box2">
                        <div className="box-left">
                            <div className="box-title">Vulnerability Scanning</div>
                            <ul className="bullet-points">
                                <li>Network Scanning: Identifies vulnerabilities in network devices such as routers,
                                    switches, and firewalls.
                                </li>
                                <li>Host Scanning: Focuses on individual devices, servers, or workstations to uncover
                                    vulnerabilities in the operating system and installed software.
                                </li>
                                <li>Web Application Scanning: Targets web applications to find vulnerabilities in code,
                                    configurations, or server settings.
                                </li>
                                <li>Database Scanning: Focuses on database systems to detect vulnerabilities in database
                                    configurations and access controls
                                </li>
                            </ul>
                            <Link to="#" className="network-scanner-tag">Scan vulnerability</Link>
                        </div>
                        <div className="box-right"></div>
                    </div>

                    <div className="box box3">
                        <div className="box-left"></div>
                        <div className="box-right">
                            <div className="box-title">Attack Surface Mapping</div>
                            <ul className="bullet-points">
                                <li>Process used in cyber-security to identify and analyze the various points where a
                                    system,
                                    network, or application could be vulnerable to cyber threats. The "attack surface"
                                    refers to all the entry points or potential avenues through which an attacker could
                                    exploit or compromise a system. Attack surface mapping aims to comprehensively
                                    understand and document these entry points, helping security professionals assess
                                    and
                                    mitigate potential risks.
                                </li>
                            </ul>
                            <Link to="#" className="network-scanner-tag">Attack network</Link>
                        </div>
                    </div>

                </main>

                <Footer/>

            </div>
        </Layout>
    );
}
export default Products;