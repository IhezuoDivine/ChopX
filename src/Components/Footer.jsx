import "../Styles/Footer.css";

function Footer() {
  return (
    <footer>
      <h1>ChopX</h1>
      <p className="eathealthyfood">Eat Healthy Food</p>
      <div className=" iconcontainer">
        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#">
          <i className="fab fa-x-twitter"></i>
        </a>
      </div>
      <div className="footerasidecontainer">
        <aside>
          <a href="">Recipes</a>
          <a href="">World Cuisines</a>
          <a href="">Equipment</a>
        </aside>
        <aside>
          <a href="">How-Tos</a>
          <a href="">Ingredients</a>
          <a href="">Features</a>
        </aside>
        <aside>
          <a href="">About Us</a>
          <a href="">Terms Of Service</a>
          <a href="">Editorial Guidelines</a>
          <a href="">Contact</a>
        </aside>
        <aside>
          <a href="">Advertise</a>
          <a href="">Careers</a>
          <a href="">Swepstakes</a>
          <a href="">Private Policy</a>
        </aside>
      </div>
      <p className="copyright">&copy;2025. All right reserved.</p>
    </footer>
  );
}
export default Footer;
