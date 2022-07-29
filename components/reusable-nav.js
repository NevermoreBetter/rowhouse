class Head extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <style>
        .navigation {
        position: fixed;
        width: 100%;
      }
      .navigation {
        z-index: 3123123;
        padding: 30px 0;
      }

      .main__image img {
        max-width: 100px;
        position: relative;
        top: 10%;
      }

      .nav .active::after {
        display: block;
        content: " ";
        position: relative;
        top: 20px;
        width: 100%;
        height: 3px;
        background-color: rgb(255, 174, 0);
      }

      .nav__item {
        font-size: 15px;
        text-align: center;
      }
      .nav__item::after {
        display: block;
        content: " ";
        position: relative;
        top: 20px;
        width: 100%;
        height: 3px;
        background-color: rgb(255, 174, 0);
        transform: scale(0);
        transition: all 0.3s;
        margin: 0 auto;
      }
      .nav__item:hover::after {
        opacity: 1;
        transform: scale(1);
        transition: all 0.3s;
      }
      .nav__button {
        border: none;
        border-radius: 0;
        color: black;
        font-weight: bold;
        background: rgb(255, 217, 0);
        padding: 10px 50px 10px 50px;
        justify-self: center;
      }
      .nav__button:hover {
        color: black;
        background: rgb(235, 192, 0);
      }
      

</style>
<nav class="navigation color1">
      <nav class="nav justify-content-center">
        <div class="main__image">
          <a href="main.html">
            <img
              class="global-nav__logo-img global-nav__logo-img--default img-fluid"
              src="https://www.therowhouse.com/hubfs/images/rowhouse/rowhouse-logo.svg"
              alt="Row House logo"
              itemprop="logo"
          /></a>
        </div>
        <a class="nav-link active text-muted nav__item" href="benefits.html">Benefits</a>
        <a class="nav-link text-muted nav__item" href="#">First Timers</a>
        <a class="nav-link text-muted nav__item" href="#">The Workout</a>
        <a class="nav-link text-muted nav__item" href="#">Row For A Cause</a>
        <a class="nav-link text-muted nav__item" href="#">Locations</a>
        <a class="nav-link text-muted nav__item" href="#">On Demand</a>
        <a class="nav-link text-muted nav__item" href="#">Blog</a>
        <a class="nav-link text-muted nav__item" href="#">Gift Cards</a>
        <a class="nav-link text-muted nav__item" href="#">Franchise</a>
        <a
          name=""
          id=""
          class="btn btn-warning text-uppercase nav__button"
          href="landing.html"
          role="button"
          >get offer</a
        >
      </nav>
    </nav>
        `;
  }
}
customElements.define("nav-component", Head);
