import Nav from "../Components/Nav.jsx";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

function Home() {
  return (
    <main className="main">
      <Header showAuthLinks={true} />
      <section></section>
      <Nav />
      <Footer />
    </main>
  );
}
export default Home;
