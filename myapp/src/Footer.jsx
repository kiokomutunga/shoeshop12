
function Footer (){
    return(
        <footer class="footer">
        <div class="footer-content">
          <p>© 2024 Kioko</p>
          <p class="footer-description">
            Kioko Shoes: Where comfort meets style. Explore our exclusive collection of trendy, high-quality footwear designed for every occasion.
          </p>
          <div class="social-icons">
            <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
              <img src="path/to/instagram-icon.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
              <img src="path/to/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" aria-label="Twitter">
              <img src="path/to/twitter-icon.png" alt="Twitter" />
            </a>
          </div>
          <p class="footer-timestamp">{new Date().toLocaleTimeString()}</p>
        </div>
      </footer>
      
    );


}
export default Footer