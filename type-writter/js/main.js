class MyComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<header>
      <div class="container">
          <div class="container-row header-row">
              <div class="brand-logo">
                  <a href="index.html">
                      <img src="images/logo.png" alt="logo">
                  </a>    
              </div>
              <div class="mobile-btn">
                <button class="menu-btn" onclick="toggleClass()">Menu</button>
              </div>

              <div class="navigation" id="navi">
                <div class="brand-logo mobile-logo">
                    <a href="index.html">
                        <img src="images/logo.png" alt="logo">
                    </a>    
                </div>
                  <ul class="menu">
                      <li>
                          <a href="index.html">Home</a>
                      </li>
                      <li>
                          <a href="about.html">About</a>
                      </li>
                      <li>
                          <a href="product.html">Product</a>
                      </li>
                      <li>
                          <a href="contact.html">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </header>`;
    }
  }
      
  customElements.define('header-panel', MyComponent);


  class MyComponents extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<footer>
      <div class="container">
          <div class="footer-logo">
              <img src="images/logo.png" alt="logo">
          </div>
          <ul class="footer-menu">
              <li>
                  <a href="index.html">Home</a>
              </li>
              <li>
                  <a href="about.html">About</a>
              </li>
              <li>
                  <a href="product.html">Product</a>
              </li>
              <li>
                  <a href="contact.html">Contact</a>
              </li>
          </ul>
          <p>Malkit Imperials, Inc. Web Development</p>
          <p>2023 West Gate, Barrie, CA L4M </p>
      </div>
  </footer>`;
    }
  }
      
  customElements.define('footer-panel', MyComponents);