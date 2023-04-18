class MyComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<header>
      <nav>
      <div class="top-section">
          <div class="top-sectionrow">
              <div class="logo">
                  <img src="img/sample-logo.png" alt="logo">  
              </div>
                  <div class="menu">
                      <ul>
                          <li>
                              <a href="#">Home</a>
                          </li>
                          <li>
                              <a href="#">About</a>
                          </li>
                          <li>
                              <a href="#">Contact</a>
                          </li>
                          <li>
                              <form action="#" method="get">
                              <input type="search" placeholder="Search...">
                              </form>
                          </li>
                      </ul>
                  </div>
          </div>
      </div>
  </nav>
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