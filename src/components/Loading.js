import ReactLoading from 'react-loading';
import './Loading.css'
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
function Loading() {
  return (
    <>

    <NavBar/>
    <div className="loading">
       <ReactLoading  type="spinningBubbles" color="#007bff" size={40} />
    </div>
    <Footer/>
    </>
  );
}

export default Loading;