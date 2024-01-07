import '../css/Scanner.css'
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Layout from "../component/Layout";
const Scanner = () => {
    return (
      <Layout title="Network Vulnerability Scanner">
        <div className="scanner-container">
          <Navbar/>
          <main className="scanner-section">
            <div className="box">

              <div className="form-box">
                <form>
                  <label htmlFor="target" className="form-title">Target</label>
                  <input type="text" className="text-input" placeholder="Target" id="target" name="target"/>
                  <label htmlFor="port-selection" className="form-title">Port Selection</label>
                  <select className="port-selection" id="port-selection" name="port-selection">
                    <option value="1">Top 10 ports</option>
                    <option value="2">Top 100 ports</option>
                    <option value="3">Top 1000 ports</option>
                  </select>
                  <button type="submit" className="submit-button-form">Start scan</button>
                </form>
              </div>

              <div className="second-box">
                <h2 className="title">Networking Assessment</h2>
                <ul className="bullet-points">
                  <li className="bullet-item">Assess the overall security posture of the network.</li>
                  <li className="bullet-item">Identify and address vulnerabilities in firewalls, routers,
                    switches, and other security devices.
                  </li>
                  <li className="bullet-item">Evaluate the security and performance of wireless networks (if
                    applicable).
                  </li>
                </ul>
              </div>

            </div>

          </main>
          <Footer/>
        </div>
      </Layout>

    );
}
export default Scanner;
