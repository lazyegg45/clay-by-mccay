import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name || 'the website'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:hello@claybymccay.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container">
      <div className="page-hero">
        <h1>Contact</h1>
        <p>Questions about an order, a custom piece, or a wholesale inquiry? Reach out below.</p>
      </div>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="6" value={form.message} onChange={handleChange} required />
          </label>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            Send Message
          </button>
        </form>

        <div className="contact-card">
          <h3>Studio Info</h3>
          <p>Nashville, TN</p>
          <p>
            <a href="mailto:hello@claybymccay.com">hello@claybymccay.com</a>
          </p>
          <p>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              @claybymccay on Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
