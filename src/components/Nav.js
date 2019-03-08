import React from 'react'

function Nav() {
  return (
      <div>
        <nav id="colorlib-main-nav" role="navigation">
        <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle active"><i></i></a>
        <div class="js-fullheight colorlib-table">
          <div class="img" style="background-image: url(images/author-2.jpg);" src="images/author-2.jpg"></div>
          <div class="colorlib-table-cell js-fullheight">
            <div class="row no-gutters">
              <div class="col-md-12 text-center">
                <h1 class="mb-4"><a href="index.html" class="logo">Colin McPike</a></h1>
                <ul>
                  <li class="active"><a href="index.html"><span><small>01</small>Home</span></a></li>
                  <li><a href="about.html"><span><small>02</small>Resume</span></a></li>
                  <li><a href="services.html"><span><small>03</small>Skills</span></a></li>
                  <li><a href="portfolio.html"><span><small>04</small>Portfolio</span></a></li>
                  <li><a href="contact.html"><span><small>05</small>Contact</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
