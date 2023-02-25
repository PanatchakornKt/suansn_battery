import "../styles/index.css";
import App from "next/app";
import NavBar from "../components/layouts/navbar";
import Footer from "../components/layouts/footer";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <div className="min-h-screen w-full bg-white font-prompt">
          <NavBar />
          <div className='my-6'>
              <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default MyApp;
