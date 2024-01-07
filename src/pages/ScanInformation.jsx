import Layout from "../component/Layout";
import styles from '../css/Scaninformaion.module.css';
import Navbar from "../component/Navbar";
import {useEffect, useState} from "react";

const ScanInformation = () => {
  const [isPending, setPending] = useState(true);
  useEffect(() => {
    setTimeout(() =>
        setPending(false)
      , 3000)
  }, []);

  const cube = () => {
    return (
      <div className={styles.rotatingCube}>
        <div className={`${styles.cubeFace} ${styles.front}`}></div>
        <div className={`${styles.cubeFace} ${styles.back}`}></div>
        <div className={`${styles.cubeFace} ${styles.left}`}></div>
        <div className={`${styles.cubeFace} ${styles.right}`}></div>
        <div className={`${styles.cubeFace} ${styles.top}`}></div>
        <div className={`${styles.cubeFace} ${styles.bottom}`}></div>
      </div>
    )
  }

  const info1 = () => {
    return (
      <div className={styles.containerInfo1}>
        <div className={styles.column}>
          <p className={styles.subTitle}>Risk Ratings</p>
          <label htmlFor="high">High<br/></label>
          <input type="range" id="high" className={styles.rangeSlider} min="0" max="100" value="50"/>
          <label htmlFor="medium">Medium<br/></label>
          <input type="range" id="medium" className={styles.rangeSlider} min="0" max="100" value="90"/>
        </div>

        <div className={styles.column}>
          <p className={styles.subTitle}><br/></p>
          <label htmlFor="low">Low<br/></label>
          <input type="range" id="low" className={styles.rangeSlider} min="0" max="100" value="50"/>
          <label htmlFor="info">Info<br/></label>
          <input type="range" id="info" className={styles.rangeSlider} min="0" max="100" value="50"/>
        </div>

        <div className={`${styles.column} ${styles.center}`}>
          <p className={styles.subTitle}>Scan status</p>
          <p className={styles.states}>Finished</p>
          <p className={styles.subTitle}>Scan duration</p>
          <p>10 second</p>
        </div>

        <div className={styles.column}>
          <p className={styles.subTitle}>Tests performed</p>
          <p className={styles.center}>1/1</p>
        </div>

      </div>
    );
  }
  const info2 = () => {
    return (
      <div className={styles.containerBox2}>

        <div className={styles.leftDiv}>
          <p>List of Tests</p>
          <ul className={styles.noBullet}>
            <li>&#x2713;<span className={styles.checkmark}></span>Running port discovery phase...</li>
          </ul>
        </div>

        <div className={styles.rightDiv}>
          <p className={styles.infoText}>SCAN PARAMETERS</p>
          <hr className={styles.infoHr}/>
          <p className={styles.infoText}>Target<br/>
            178.233.140.11</p>
          <hr className={styles.infoHr}/>
          <p className={styles.infoText}>Scan type<br/>
            Light</p>
        </div>
      </div>
    );
  }
  return (
    <Layout title="Scanning...">

      <div className={styles.root}>
        <Navbar/>
        <main className={styles.contentWrapper}>
          {/*box 1*/}
          <div className={styles.container}>
            <h2 className={styles.center}>Scan</h2>
            <div className={styles.customBox}>
              <p className={styles.center}>178.233.140.11</p>
            </div>
          </div>
          {/*box 2*/}
          <div className={styles.container}>
            <h2>Scan summary</h2>
            <div className={styles.box}>
              {isPending && cube()}
              {!isPending && info1()}
            </div>
          </div>
          {/*box 3*/}
          <div className={styles.container}>
            <h2>Scan coverage information</h2>
            <div className={`${styles.box} ${styles.box3}`}>
              {isPending && cube()}
              {!isPending && info2()}
            </div>
          </div>

        </main>
      </div>

    </Layout>
  );

}
export default ScanInformation;
