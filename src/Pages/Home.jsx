import Nav from "../Components/Nav.jsx";
import Header from "../Components/Header.jsx";
function Home() {
  return (
    <main className="main">
      <Header showAuthLinks={true} />
      <section></section>
      <Nav />
    </main>
  );
}
export default Home;
