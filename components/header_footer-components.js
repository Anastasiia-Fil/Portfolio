// =============================
// HEADER
// =============================
function injectHeader() {
  const headerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a class="logo" href="/index.html">af.code</a>

        <button
          class="nav-toggle"
          aria-expanded="false"
          aria-controls="main-nav"
          aria-label="Open menu">
          <span class="hamburger"></span>
        </button>

        <nav id="main-nav" class="nav" aria-label="Main navigation">
          <a href="/index.html#projects">Projects</a>
          <a href="/pages/Cheatsheet.html">Cheat sheets</a>
          <a href="/pages/Resume.html">Resume</a>
          <a href="/pages/hobbies.html">My hobbies</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  `;

  document.querySelector("header").innerHTML = headerHTML;
  initMobileNav();
}

// =============================
// FOOTER
// =============================
function injectFooter() {
  const footerHTML = `
    <footer class="footer" id="contact">
      <div class="container footer-grid">

        <div class="footer-info">
          <h2>LET'S CONNECT</h2>
          <p>
            I collaborate with ambitious brands and people worldwide.
            Get in touch to find out more.
          </p>

          <ul class="contact-list">
            <li>
              <strong>Email:</strong>
              <a href="mailto:ag.filippova1@gmail.com">
                ag.filippova1@gmail.com
              </a>
            </li>

            <li>
              <strong>Phone:</strong>
              <a href="tel:+14379679060">
                +1 437 967 9060
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>
              <a
                href="https://www.linkedin.com/in/anastasiia-filippova-b07a252a6/"
                target="_blank"
                rel="noopener noreferrer">
                linkedin.com/in/anastasiia-filippova
              </a>
            </li>
            <li>
              <strong>Github:</strong>
              <a
                href="https://github.com/Anastasiia-Fil"
                target="_blank"
                rel="noopener noreferrer">
                https://github.com/Anastasiia-Fil
              </a>
            </li>
          </ul>
        </div>


        
        <!-- Formspree form -->
        <form
          class="contact-form"
          action="https://formspree.io/f/mblnbwdn"
          method="POST">

          <label>
            <span>Name</span>
            <input type="text" name="name" required>
          </label>

          <label>
            <span>Email</span>
            <input type="email" name="email" required>
          </label>

   
 
  <label>
  <span>Message</span>
  <textarea name="message" rows="4" required>
Hello Anastasiia,

I’m interested in working together and would love to connect.
  </textarea>
</label>

</label>


          <!-- Optional subject -->
          <input type="hidden" name="_subject" value="New message from portfolio">

          <!-- Optional redirect -->
          <!-- <input type="hidden" name="_redirect" value="/thank-you.html"> -->

          <button class="btn" type="submit">Send</button>
        </form>

      </div>

      <div class="container footer-note">
        © Anastasiia Filippova — UX/UI Design & Software Development
      </div>
    </footer>
  `;

  document.querySelector("footer").innerHTML = footerHTML;
}
// =============================
// MOBILE NAV
// =============================
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !expanded);
    nav.classList.toggle("show");
  });
}

// =============================
// INIT
// =============================
document.addEventListener("DOMContentLoaded", () => {
  injectHeader();
  injectFooter();
});
