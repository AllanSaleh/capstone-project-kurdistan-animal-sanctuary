import "../styles/index.css";
import Navbar from "./Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Navbar />
    // <Component {...pageProps} />
  );
}

export default MyApp;
