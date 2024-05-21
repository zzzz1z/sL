import ReactLoading from 'react-loading';
import './Loading.css'
import Header from './header/header';
import Footer from './footer/footer';
function Loading() {
  return (
    <>

    <Header/>
    <div className="loading">
       <ReactLoading  type="spinningBubbles" color="#007bff" size={40} />
    </div>
    <Footer/>
    </>
  );
}

export default Loading;