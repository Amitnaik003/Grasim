import { useState, useEffect } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'  
 
function Navbar() {
  const [navActive, setNavActive] = useState(false)  
  return ( 
    <nav className="navbar">
      <div className="logo">
        <a href="#"><img
          src="https://gumlet.assettype.com/freepressjournal/2023-09/ce68e021-3190-49e1-9078-f1bf0ad9425c/Untitled_design__8_.jpg"
          alt="Aditya Birla Grasim Logo" /></a>
      </div>
      <ul className={`nav-links${navActive ? ' nav-active' : ''}`} id="navLinks">
        <li><a href="#industries">Industries</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#sustainability">Sustainability</a></li>
        <li><a href="#innovation">Innovation</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="search-box">
          <input type="text" placeholder="Search..." id="searchInput" />
          <button onClick={() => alert('Search is a placeholder!')}><i className="fas fa-search"></i></button>
        </li>
      </ul>
      <div className={`burger${navActive ? ' toggle' : ''}`} id="burger" onClick={() => setNavActive(!navActive)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

function CookieConsent() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const cookieName = 'adityaBirlaGrasim_cookie_accepted'
    if (!localStorage.getItem(cookieName)) setVisible(true)
  }, [])
  function acceptCookies() {
    localStorage.setItem('adityaBirlaGrasim_cookie_accepted', 'true')
    setVisible(false)
  }
  if (!visible) return null
  return (
    <div className="cookie-consent" id="cookieConsent">
      <p>
        This website uses cookies to ensure you get the best experience.{' '}
        <a href="#">Learn more</a>
      </p>
      <button className="accept-cookies-btn" id="acceptCookies" onClick={acceptCookies}>
        Accept
      </button>
    </div>
  )
}

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handler = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetId = e.target.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <section id="hero" className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="hero-content">
            <h1>GRASIM</h1>
            <p>Providing a digital platform that streamlines production data, supports lean management insights,
              and improves operational visibility.</p>
            <button className="cta-button">Learn More</button>
          </div>
        </section>
        {/* Industries */}
        <section id="industries" className="info-section">
          <h2>Our Industries</h2>
          <div className="info-grid">
            <div className="info-card">
              <img src="https://th.bing.com/th/id/OIP.2VWC6amLismyDrliwfCM_gHaD2?rs=1&pid=ImgDetMain" alt="Industry 1" />
              <h3>Textiles</h3>
              <p>Grasim began its operations in 1947 as a textile manufacturer. It is a major player in the
                production of Viscose Staple Fibre (VSF)</p>
            </div>
            <div className="info-card">
              <img src="https://th.bing.com/th/id/OIP.4JIFiY5Q9pTN-9MooRgrQAHaFH?rs=1&pid=ImgDetMain" alt="Industry 2" />
              <h3>Chemicals</h3>
              <p>The chemicals division manufactures caustic soda, chlorine derivatives, and other specialty
                chemicals.</p>
            </div>
            <div className="info-card">
              <img src="https://www.adityabirlarenewables.com/Upload/Images/masthead/Grasim-Industries-acquires-stake-in-wholly-owned-arm,-ABRSPL-for-Rs-1.jpg" alt="Industry 3" />
              <h3>Renewables</h3>
              <p>Grasim is also venturing into the renewable energy sector, emphasizing sustainable solutions
                and innovations.</p>
            </div>
          </div>
        </section>
        {/* Products */}
        <section id="products" className="info-section">
          <h2>Our Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="https://th.bing.com/th/id/OIP.mGVvPqJaqQHfZRF2QNjp_wHaFj?rs=1&pid=ImgDetMain" alt="Product A" />
              <h3>Caustic Soda</h3>
              <p>Grasim is one of the largest producers of caustic soda in India, with a significant capacity
                expansion planned to meet rising demand.</p>
              <a href="#" className="product-link">View Details</a>
            </div>
            <div className="product-card">
              <img src="https://th.bing.com/th/id/OIP.cU-rGw-UYYTAFDfT-04dWAHaHa?rs=1&pid=ImgDetMain" alt="Product B" />
              <h3>Polyaluminium Chloride (PAC)</h3>
              <p>IPolyaluminium chloride is aluminium based inorganic coagulant designed for clarification of wastewater & paper sizing.</p>
              <a href="#" className="product-link">View Details</a>
            </div>
            <div className="product-card">
              <img src="https://5.imimg.com/data5/AU/EE/JA/SELLER-86062981/orthophosphoric-acid-small-pack-5-kg-250x250.jpg" alt="Product C" />
              <h3>Chlorosulphonic Acid (CSA)</h3>
              <p>Chlorosulphonic Acid (CSA) produced by Aditya Birla Grasim is a clear, fuming liquid with a
                minimum purity of 98.5%.</p>
              <a href="#" className="product-link">View Details</a>
            </div>
            <div className="product-card">
              <img src="https://th.bing.com/th/id/OIP.HYYUR1Meu4pecOoX8yUnBgAAAA?w=300&h=222&rs=1&pid=ImgDetMain" alt="Product D" />
              <h3>Calcium Chloride (CaCl)</h3>
              <p>Calcium Chloride (CaCl₂) produced by Aditya Birla Grasim is a highly pure chemical used
                across diverse applications including construction, de-icing, and as a drying agent in
                industrial processes.</p>
              <a href="#" className="product-link">View Details</a>
            </div>
          </div>
        </section>
        {/* Sustainability */}
        <section id="sustainability" className="info-section wide-section bg-light-gray">
          <h2>Sustainability at Grasim</h2>
          <div className="sustainability-content">
            <img src="https://th.bing.com/th/id/OIP.D5kchP8aSluFbEsN975P6QHaJ4?rs=1&pid=ImgDetMain" alt="Sustainability" />
            <div className="sustainability-text">
              <p>Grasim Industries strives to lead in sustainable business practices across its global
                operations. The company emphasizes a holistic approach towards sustainability, focusing on
                environmental, social, and governance (ESG) criteria as part of its corporate strategy. </p>
              <p>Net-Zero Emissions: Grasim aims to achieve net-zero carbon emissions across all operations by
                2050. This aligns with the Aditya Birla Group's broader sustainability goals. </p>
              <p>Water Management: The company has implemented significant water sustainability initiatives,
                particularly at its facilities in Nagda, Madhya Pradesh, where they have developed water
                management systems that benefit over 300,000 people by improving access to potable water and
                irrigation.</p>
              <button className="cta-button">Our Sustainability Report</button>
            </div>
          </div>
        </section>
        {/* Innovation */}
        <section id="innovation" className="info-section">
          <h2>Innovation & R&D</h2>
          <div className="innovation-grid">
            <div className="innovation-card">
              <h3>Cutting-Edge Research</h3>
              <p>Investing in advanced research to develop next-generation materials and processes.</p>
            </div>
            <div className="innovation-card">
              <h3>Collaborative Development</h3>
              <p>Partnering with academia and industry leaders to drive technological breakthroughs.</p>
            </div>
            <div className="innovation-card">
              <h3>Future Technologies</h3>
              <p>Exploring new frontiers in sustainable chemistry and bio-based products.</p>
            </div>
          </div>
        </section>
        {/* About */}
        <section id="about" className="info-section wide-section">
          <h2>About Aditya Birla Grasim</h2>
          <div className="about-content">
            <img src="https://fresheropenings.com/wp-content/uploads/Aditya-Birla-Recruitment-2023.webp" alt="Company Overview" />
            <div className="about-text">
              <p>Aditya Birla Grasim Industries Limited, a flagship company of the diversified Aditya Birla
                Group, is a leading global player in various sectors including Viscose Staple Fibre (VSF),
                Chlor-Alkali, Linen and Insulators. With a rich heritage and a forward-looking vision, we
                are committed to excellence, innovation, and sustainable growth.</p>
              <p>Our operations span across continents, driven by a dedicated workforce and a commitment to
                delivering superior value to our customers and stakeholders.</p>
            </div>
          </div>
        </section>
        {/* Blog */}
        <section id="blog" className="info-section bg-light-gray">
          <h2>Latest Insights from Our Blog</h2>
          <div className="blog-grid">
            <article className="blog-post">
              <img src="https://i.ytimg.com/vi/Mm0IuKrRYbE/maxresdefault.jpg" alt="Blog Post 1" />
              <h3><a href="#">Paints and B2B E-Commerce</a></h3>
              <p className="blog-meta">By John Doe | June 5, 2025</p>
              <p>Grasim is actively entering the paints business, with plans to fully operationalize all six
                plants by FY25. This reflects the company’s strategic focus on high-growth sectors</p>
              <a href="#" className="read-more">Read More</a>
            </article>
            <article className="blog-post">
              <img src="https://www.cms.adityabirla.com/uploads/birla_cellulose_award_1_742d27d1a0.webp" alt="Blog Post 2" />
              <h3><a href="#">Sustainability Initiatives</a></h3>
              <p className="blog-meta">By Jane Smith | May 28, 2025</p>
              <p>The company has maintained a strong commitment to sustainability, evident from its Viscose
                business receiving recognition for conservation efforts and advancements in circular
                solutions</p>
              <a href="#" className="read-more">Read More</a>
            </article>
            <article className="blog-post">
              <img src="https://www.grasim.com/Upload/Content_Files/grasim-cellulosic-division-vilayat-bharuch1.jpg" alt="Blog Post 3" />
              <h3><a href="#">New Leadership</a></h3>
              <p className="blog-meta">By Alex Lee | May 20, 2025</p>
              <p>The induction of Ananya Birla and Aryaman Vikram Birla as Directors on the board is expected
                to inject fresh perspectives and drive growth initiatives, particularly in new-age
                businesses and consumer engagement strategies </p>
              <a href="#" className="read-more">Read More</a>
            </article>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="info-section">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input type="text" id="subject" name="subject" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="cta-button">Send Message</button>
              </form>
            </div>
            <div className="contact-details">
              <h3>Reach Out To Us</h3>
              <p><i className="fas fa-map-marker-alt"></i> Aditya Birla Grasim Industries Ltd., Chemical Division Karwar,P.O Binaga</p>
              <p><i className="fas fa-phone"></i> +91-XXXXXXXXXX</p>
              <p><i className="fas fa-envelope"></i> info@adityabirlagrasim.com</p>
              <div className="social-media">
                <a href="https://www.facebook.com/AdityaBirlaGrp"><i className="fab fa-facebook-f"></i></a>
                <a href="https://x.com/AdityaBirlaGrp"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/company/www.grasim.com/"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/grasim.industries/"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Aditya Birla Grasim Industries. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </footer>
      <CookieConsent />
    </>
  )
}

export default App
