class Connect extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <style>
        .connect__container {
        padding: 50px 0;
        }
        .social__icons {
        font-size: 23px;
        }
        .connect__input {
        border: 1px solid black;
        }
        .connect__btn {
        border-radius: 0;
        border: 1px solid black;
        position: relative;
        top: -38px;
        left: 95%;
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
        .container {
        padding: 150px 0;
        }
        .form-floating {
        color: grey;
        }
        </style>
        <section class="connection color1">
      <div class="container connect__container">
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <h4 class="connect__text text-black fw-bold"
              >DON'T MISS A BEAT. <br />
              SUBSCRIBE AND STAY CONNECTED</h4
            >
          </div>
          <div class="col-lg-4 col-md-12">
            <form action="/">
              <div class="connect__form">
                <div class="mb-3">
                  <label for="send" class="form-label text-muted"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    class="form-control connect__input"
                    name="send"
                    id="send"
                    required
                    placeholder=""
                  />
                  <input
                    class="btn btn-warning connect__btn"
                    type="submit"
                    value=">"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-4 col-md-12 text-center">
            <div class="social__text text-muted">Follow us on Socials</div>
            <div class="social__icons">
              <a href=""><i class="icon-twitter text-muted"></i></a>
              <a href=""><i class="icon-facebook-squared text-muted"></i></a>
              <a href=""><i class="icon-instagram text-muted"></i></a>
              <a href=""><i class="icon-linkedin text-muted"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
        `;
  }
}
customElements.define("connect-component", Connect);
