import Nav from "../Components/Nav.jsx";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import Images from "../Images";
import "../Styles/Home.css";

function Home() {
  return (
    <main className="main">
      <Header showAuthLinks={true} />
      <section></section>
      <Nav />
      <section>
        <article>
          <div className="homediv">
            <img
              className="homeimg"
              src={Images["ayesha-firdaus-c3esWyvW3E4-unsplash"]}
              alt="Home section"
            />
            <h1>Favorite Food of the Year</h1>
            <p>
              Set the tone with a delightful spread of timeless party and picnic
              favorites creamy potato salad, zesty pasta salad, juicy Coney
              dogs, golden fried chicken, smoky BBQ drumsticks, and a
              mouthwatering grilled burger that's sure to steal the show. After
              that, it's time to dive into some cheerful, flag inspired fun
              under the sun!
            </p>
          </div>
          <aside className="rating">
            <h4>Eat Healthy Food</h4>
            <div className="ratingdiv">
              <div>
                <h3>10k</h3>
                <p>Original Recipes</p>
              </div>
              <div>
                <h3>900k+</h3>
                <p>Ratings & Reviews</p>
              </div>
              <div>
                <h3>1k</h3>
                <p>Home Cooks</p>
              </div>
            </div>
          </aside>
        </article>
        <section className="thelatest">
          <div>
            <ul>
              <li>
                <img src={Images[""]} alt="" />
                <p></p>
              </li>
              <li>
                <img src={Images[""]} alt="" />
                <p></p>
              </li>
              <li>
                <img src={Images[""]} alt="" />
                <p></p>
              </li>
              <li>
                <img src={Images[""]} alt="" />
                <p></p>
              </li>
              <li>
                <img src={Images[""]} alt="" />
                <p></p>
              </li>
              <li>
                <img src={Images[""]} alt="" />
                <p></p>
              </li>
              <li>
                <img src={Images[""]} alt="" />
                <p></p>
              </li>
              <li>
                <img src={Images[""]} alt="" />
                <p></p>
              </li>
              <li>
                <img src={Images[""]} alt="" />
                <p></p>
              </li>
              <li>
                <img src={Images[""]} alt="" />
                <p></p>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
export default Home;
