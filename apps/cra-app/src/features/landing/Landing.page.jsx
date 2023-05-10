import './Landing.styles.css';
import Header from '../../components/Header';
// import { Header } from 'ui';
import { Link } from "react-router-dom";

function LandingPage() {

  return (
    <div className="App">
      <Header cra={true} />
     <section>
      <div className="mainContent">
        <div className="title">
          <h2>Cada bocado<br></br></h2>
          <h2>de <span>chori</span></h2>
          <p>es cultura cordobesa</p>
          <Link to="#" className="btn">Entrale</Link>
        </div>
        <div className='imgBox'>
          <img src="https://res.cloudinary.com/infovalue/image/upload/e_sepia:80,f_auto,q_auto/v1683656221/argentinian-choripan-109514-1.jpg" alt="alto-chori-guacho"/>
        </div>
      </div>
     </section>
    </div>
  );
}

export default LandingPage;
