function Contact(){
    return(
        <main className="contact-container">
                <section id="contact"className="contact-hero">
                  <h1 className="next-title">Get in Touch</h1><br />
                  <p className="next-p">Have a project in mind or just want to say hi? Feel free to reach out!</p>

                  <div className="contact-form-wrapper">
                    <form className="contact-form">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="email@example.com" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="What is this about?" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Your message here..."
                          required></textarea>
                      </div>

                      <button type="submit" className="submit-btn">SEND MESSAGE</button>
                    </form>
                  </div>
                  </section >

                  </main >
    )
}
export default Contact;     