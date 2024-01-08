import '../css/Scanner.css'
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Layout from "../component/Layout";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

const Scanner = () => {
  const [target, setTarget] = useState("");
  const [port, setPort] = useState("10");
  const navigate = useNavigate();
  function handleChange(e) {
    e.preventDefault();
    setTarget(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(target)
    console.log(port)
    navigate(`/result?target=${target}&port=${port}`);
  }

  return (
    <Layout title="Network Vulnerability Scanner">
      <div className="scanner-container">
        <Navbar/>
        <main className="scanner-section">
          <div className="box">

            <div className="form-box">
              <form onSubmit={handleSubmit}>
                <label htmlFor="target" className="form-title">Target</label>
                <input type="text" className="text-input" placeholder="Target" id="target" name="target" value={target}
                       onChange={handleChange}/>
                <label htmlFor="port-selection" className="form-title">Port Selection</label>
                <select className="port-selection" id="port-selection" name="port-selection" value={port}
                        onChange={(e) => setPort(e.target.value)}>
                  <option value="10">Top 10 ports</option>
                  <option value="100">Top 100 ports</option>
                  <option value="1000">Top 1000 ports</option>
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
