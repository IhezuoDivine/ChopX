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
          <div className="thelatestcontainer">
            <h2>What's New</h2>
            <ul>
              <li>
                <img
                  src={Images["adam-bartoszewicz-fd5n2sZsV5g-unsplash"]}
                  alt=""
                />
                <p>
                  Sweet Closure A slice of warm pie served with cream every bite
                  worth the wait.
                </p>
              </li>
              <li>
                <img src={Images["brooke-lark-qdyBKWSzpSI-unsplash"]} alt="" />
                <p>
                  Fresh & Hot Soup served in a warm bowl with steam rising and
                  spices dancing in the air.
                </p>
              </li>
              <li>
                <img src={Images["calum-lewis-vA1L1jRTM70-unsplash"]} alt="" />
                <p>
                  Art on a Plate A carefully plated meal, each ingredient placed
                  with intention
                </p>
              </li>
              <li>
                <img
                  src={Images["christian-mackie-41pFxtqK_uU-unsplash"]}
                  alt=""
                />
                <p>
                  Searing Perfection Steak mid-cook, caramelizing beautifully
                  with a crispy crust forming.
                </p>
              </li>
              <li>
                <img src={Images["homeimage"]} alt="" />
                <p>
                  Golden Moments Freshly seasoned chicken sizzling in the pan,
                  locking in that juicy flavor.
                </p>
              </li>
              <li>
                <img
                  src={Images["leighann-blackwood-HCGCpFxQlrA-unsplash"]}
                  alt=""
                />
                <p>
                  Sweet Anticipation Cake just pulled from the oven, still warm,
                  soft, and sweet-smelling.
                </p>
              </li>
              <li>
                <img
                  src={Images["nadine-primeau-l5Mjl9qH8VU-unsplash"]}
                  alt=""
                />
                <p>
                  Almost There Pasta boiling to perfection, waiting to be
                  drenched in creamy Alfredo sauce.
                </p>
              </li>
              <li>
                <img
                  src={Images["odiseo-castrejon-1CsaVdwfIew-unsplash"]}
                  alt=""
                />
                <p>
                  Color in the Pan Stir-fried vegetables tossed with sauce,
                  bright and crunchy.
                </p>
              </li>
              <li>
                <img src={Images["omo"]} alt="" />
                <p>
                  Bubbling Goodness A pot of hearty stew just starting to
                  simmer, rich with herbs and tender cuts.
                </p>
              </li>
              <li>
                <img
                  src={Images["thomas-tucker-MNtag_eXMKw-unsplash"]}
                  alt=""
                />
                <p>
                  Picture Perfect Finish Dessert plated and ready moist brownies
                  dusted with powdered sugar.
                </p>
              </li>

              <li>
                <img
                  src={Images["victoria-shes-UC0HZdUitWY-unsplash"]}
                  alt=""
                />
                <p>
                  Rise & Roast Bread dough swelling in the oven, the scent of
                  comfort filling the air.
                </p>
              </li>
              <li>
                <img
                  src={Images["volodymyr-proskurovskyi-XhS0YkpQI2M-unsplash"]}
                  alt=""
                />
                <p>
                  Art on a Plate A carefully plated meal, each ingredient placed
                  with intention.
                </p>
              </li>
              <li>
                <img src={Images["webvilla-hv1MrBzGGNY-unsplash"]} alt="" />
                <p>
                  Pan Magic Onions and garlic dancing in hot oil, the true start
                  of something special.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="chefcomment">
          <h2>Chef's</h2>
          <div className="chefcontainer">
            <ul>
              <li>
                <img src={Images["eiliv-aceron-wNQoaYCFcsI-unsplash"]} alt="" />{" "}
                <p>
                  A good dish doesn't just feed the stomach it speaks to the
                  soul. Every ingredient has a purpose, and every bite should
                  feel like comfort, memory, and love on a spoon.
                </p>
              </li>
              <li>
                <img
                  src={Images["fabrizio-magoni-boaDpmC-_Xo-unsplash"]}
                  alt=""
                />
                <p>
                  In my kitchen, the flame never dies and neither does the
                  hunger for better flavor. I chase taste like an artist chases
                  color always experimenting, always creating.
                </p>
              </li>
              <li>
                <img
                  src={Images["jason-leung--eKZLpj7U0E-unsplash (1)"]}
                  alt=""
                />
                <p>
                  Cooking is art, but seasoning… that's science and instinct
                  combined. You can follow a recipe, but it's the hand that
                  sprinkles the spice and the heart behind the fire that make it
                  unforgettable.
                </p>
              </li>
              <li>
                <img
                  src={Images["john-fornander-jJIb2e7Jkcs-unsplash"]}
                  alt=""
                />
                <p>
                  Every plate I serve carries a piece of my story—spiced,
                  stirred, and served hot. It's more than food; it's emotion
                  layered in flavor, shaped by tradition and passion.
                </p>
              </li>
              <li>
                <img
                  src={Images["johnathan-macedo-4NQEvxW2_4w-unsplash"]}
                  alt=""
                />
                <p>
                  Fresh ingredients, honest flavors, and a bit of chaos that's
                  how magic happens here. The kitchen is my playground, my
                  battle zone, and my temple all in one.
                </p>
              </li>
              <li>
                <img src={Images["louis-hansel-v3OlBE6-fhU-unsplash"]} alt="" />{" "}
                <p>
                  Food is my language. If you feel something when you taste it,
                  then I've said it right. Sometimes I don't need words just
                  heat, texture, and a perfect finish.
                </p>
              </li>
              <li>
                <img
                  src={Images["pylyp-sukhenko-y-XZf_TNRms-unsplash"]}
                  alt=""
                />{" "}
                <p>
                  The beauty of a dish is not in how it looks, but in the
                  silence that follows the first bite. That pause, that look in
                  their eyes it tells me I've done something right.
                </p>
              </li>
              <li>
                <img src={Images["redcharlie-t-7KEq9M0b0-unsplash"]} alt="" />{" "}
                <p>
                  I don't just cook. I create memories that start in the pan and
                  end at your heart. The smell, the sizzle, the warmth it all
                  comes together to tell a story you'll never forget.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="nigeriafood">
          <h3>Nigeria Foods</h3>
          <div className="nigeriafooddiv">
            <ul>
              <li>
                <img
                  src={Images["abraham-owunna-K5HSd7U8tRo-unsplash"]}
                  alt=""
                />

                <p>
                  <span> Fried Rice</span> Colorful, aromatic, and packed with
                  mixed vegetables, liver or shrimp, and a hint of curry
                  Nigerian fried rice is a party staple you'll always crave.
                </p>
              </li>
              <li>
                <img
                  src={Images["chibuzo-nwaneri-icciS_O3Gkk-unsplash"]}
                  alt=""
                />
                <p>
                  <span>Jollof Rice with Spicy Garnished Meat</span>A Nigerian
                  classic that needs no introduction! Our Jollof Rice is cooked
                  in a rich blend of tomatoes, peppers, onions, and special
                  spices  giving it that deep, smoky flavor everyone loves.
                  Served alongside a generous plate of well-seasoned, grilled or
                  fried meat, garnished with onions and fresh pepper sauce.
                </p>
              </li>
              <li>
                <img src={Images["femi-oyekoya-rbEtzd20Qcw-unsplash"]} alt="" />
                <p>
                  <span> Moi Moi</span>A soft, steamed bean pudding made from
                  blended beans, peppers, onions, and spices. Often served with
                  rice or as a protein-rich snack on its own.
                </p>
              </li>
              <li>
                <img src={Images["femoree-_VRo59IsqLo-unsplash"]} alt="" />
                <p>
                  <span>Fried Rice with Garnished Meat</span>This isn't your
                  average fried rice this version comes fully loaded! Stir-fried
                  with colorful vegetables and savory seasonings, then served
                  with richly spiced garnished meat, often grilled or
                  oven-roasted to perfection. It's a full party on a plate!
                </p>
              </li>
              <li>
                <img src={Images["femoree-kn_ANxnwCQ0-unsplash"]} alt="" />
                <p>
                  <span>Oha Soup</span>This Eastern Nigerian delicacy is made
                  with tender oha leaves, thickened with cocoyam, and simmered
                  with meats and traditional seasonings a true comfort dish.
                </p>
              </li>
              <li>
                <img src={Images["hery-agus-jkmwp_OYOA8-unsplash"]} alt="" />
                <p>
                  <span>Agidi</span>A smooth, firm cornmeal pudding, Agidi is
                  often served chilled and pairs beautifully with pepper soup,
                  tomato stew, or beans. Its soft, jelly-like texture makes it a
                  light yet satisfying companion to spicier dishes.
                </p>
              </li>
              <li>
                <img
                  src={Images["keesha-s-kitchen-_y325luZNUs-unsplash"]}
                  alt=""
                />
                <p>
                  <span> Puff Puff</span>Sweet, soft, and golden brown, puff
                  puff is a favorite street snack deep fried dough balls with a
                  slightly crisp outside and fluffy center.
                </p>
              </li>
              <li>
                <img
                  src={Images["keesha-s-kitchen-PqG32DYCTM8-unsplash"]}
                  alt=""
                />
                <p>
                  <span>Jollof Rice</span>The king of West African dishes —
                  rich, spicy, and tomato-based rice cooked with peppers,
                  onions, and seasonings. Always served with fried plantains,
                  chicken, or fish, and always a hit!
                </p>
              </li>
            </ul>
          </div>
        </section>
        <article className="faqs">
          <div className="faqsdiv">
            <details>
              <summary>
                <h4>1. What kind of recipes do you share?</h4>
              </summary>
              <p>
                I share a wide variety of recipes including quick weekday meals,
                traditional dishes, party favorites, and desserts. Whether
                you're a beginner or an experienced cook, you'll find something
                tasty to try!
              </p>
            </details>
            <details>
              <summary>
                <h4>2. Are the ingredients easy to find?</h4>
              </summary>
              <p>
                Yes! Most of the ingredients used are everyday items you can
                find in local grocery stores or markets. I also suggest
                alternatives in case something is unavailable in your area.
              </p>
            </details>
            <details>
              <summary>
                <h4>3. Do you offer any cooking tips for beginners?</h4>
              </summary>
              <p>
                Absolutely! Each recipe comes with step-by-step instructions,
                tips, and even video guidance where needed. I'm here to make
                cooking enjoyable and stress-free.
              </p>
            </details>
            <details>
              <summary>
                <h4>4. Can I request a specific recipe?</h4>
              </summary>
              <p>
                Yes, I love getting recipe requests! You can send in a dish
                you'd like to see, and I'll do my best to recreate and post it.
              </p>
            </details>
            <details>
              <summary>
                <h4>
                  5. Do you focus on any dietary needs (vegan, gluten-free,
                  etc.)?
                </h4>
              </summary>
              <p>
                I try to include options for various dietary preferences like
                vegan, low-carb, and gluten-free. Recipes are often labeled with
                these tags to help you find what fits your lifestyle.
              </p>
            </details>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
}
export default Home;
