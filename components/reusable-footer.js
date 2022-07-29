class Foot extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <style>
        .pages {
        background: #243746;
        color: white;
        }
        .first__row::after {
        position: relative;
        bottom: -16px;
        margin: 0 auto;
        display: block;
        content: " ";
        height: 1px;
        width: 100%;
        background-color: white;
        }
        .pages__container {
        padding: 100px 0 40px 0;
        }

        .pages__container a:hover {
        color: #243746 !important;
        transition: all 0.4s;
        }
        .pages__container a {
        color: white;
        transition: all 0.3s;
        }
        .container {
        padding: 150px 0;
        }
        .form-floating {
        color: grey;
        }
        .btn-warning {
        --bs-btn-focus-shadow-rgb: none;
        --bs-btn-hover-border-color: none;
        }

        .form-control {
        border-radius: 0;
        }

        .color1 {
        background: #eee;
        }   
        ul,
        li {
        list-style: none;
        text-decoration: none !important;
        padding-left: 0 !important;
        }
        </style>
        
        <footer class="pages">
      <div class="container pages__container">
        <div class="row text-white first__row">
          <div class="col-lg-2 col-md-6 mb-4 ">
            <h4 class="text-uppercase fw-bold mb-4">COMPANY</h4>
            <div class="company__list ">
              
                <a href=" " class="text-white text-decoration-none list-group-item d-inline-block mb-2">About</a> <br>
                <a href="" class="text-white text-decoration-none list-group-item d-inline-block mb-2">Careers</a> <br>
                <a href="" class="text-white text-decoration-none list-group-item d-inline-block mb-2">Press</a> <br>
              
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <h4 class="text-uppercase fw-bold mb-4">CLASS</h4>
            <div class="class__list">
              <ul class="list-group-vertical">
                <a href="" class="text-white text-decoration-none list-group-item d-inline-block mb-2">Why Row?</a><br>
                <a href="" class="text-white text-decoration-none list-group-item d-inline-block mb-2">The Workout</a><br>
                <a href="" class="text-white text-decoration-none list-group-item d-inline-block mb-2">Meter Program</a><br>
              </ul>
            </div></div>
          <div class="col-lg-2 col-md-6"><h4 class="text-uppercase fw-bold mb-4">Find us</h4>
            <div class="find__list">
              <ul>
                <a href="" class="text-white text-decoration-none list-group-item d-inline-block mb-2">Locations</a><br>
                <a href="" class="text-white text-decoration-none list-group-item d-inline-block mb-2">XPASS</a><br>
              </ul>
            </div></div>
          <div class="col-lg-2 col-md-6 me-lg-5"><h4 class="text-uppercase fw-bold mb-4">OPPORTUNITY</h4>
            <div class="opportunity__list">
              <ul>
                <a href="" class="text-white text-decoration-none list-group-item d-inline-block mb-2">Franchise</a><br>
              </ul>
            </div></div>
            <div class="col-lg-2 col-md-6 "><h4 class="text-uppercase fw-bold mb-4">SUPPORT</h4>
            <div class="support__list">
              <ul>
                <a href="" class="text-white text-decoration-none list-group-item d-inline-block mb-2">Contact Us</a><br>
                <a href="" class="text-white text-decoration-none list-group-item d-inline-block mb-2">COVID Safety Measures</a><br>
              </ul>
            </div></div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-2 col-md-6">
            ©2022 Row House
          </div>
          <div class="col-lg-2 col-md-6">
            <a href="" class="text-white text-decoration-none list-group-item d-inline-block mb-2">Privacy Policy</a>
          </div>
          <div class="col-lg-2 col-md-6">
            <a href="" class="text-white text-decoration-none list-group-item d-inline-block mb-2">Cookie Policy</a>
          </div>
          <div class="col-lg-2 col-md-6">
            <a href="" class="text-white text-decoration-none list-group-item d-inline-block mb-2">Terms of Service</a>
          </div>
          <div class="col-lg-2 col-md-6">
            <a href="" class="text-white text-decoration-none list-group-item d-inline-block mb-2">GO License Agreement</a>
          </div>
        </div>
      </div>
    </footer>
        `;
  }
}
customElements.define("footer-component", Foot);
