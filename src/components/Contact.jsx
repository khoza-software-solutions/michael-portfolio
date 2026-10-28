import { Phone, Mail, GraduationCap, CodeXml as Github, BriefcaseBusiness as Linkedin, CircleCheck, TriangleAlert } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

const contacts = [
  { icon: Phone, label:'Phone',            value:'+27 69 431 7707',                href:'tel:+27694317707' },
  { icon: Mail, label:'Personal Email',   value:'khozamichael21@gmail.com',        href:'mailto:khozamichael21@gmail.com' },
  { icon: GraduationCap, label:'University Email', value:'231954775@tut4life.ac.za',         href:'mailto:231954775@tut4life.ac.za' },
  { icon: Github,  label:'GitHub',           value:'github.com/Michael-Khoza',        href:'https://github.com/Michael-Khoza' },
  { icon: Linkedin, label:'LinkedIn',         value:'michael-khoza-65781831b',          href:'https://www.linkedin.com/in/michael-khoza-65781831b' },
]

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name.trim()) {
      setStatus('Name is required')
      return
    }
    if (!form.email.trim() || !validateEmail(form.email)) {
      setStatus('Please enter a valid email address')
      return
    }
    if (!form.message.trim()) {
      setStatus('Message is required')
      return
    }

    setStatus('loading')
    try {
      await emailjs.send(
        'service_spnffun',
        'template_zzinb7m',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: 'khozamichael21@gmail.com',
        },
        '8h1vCMWZqABXEXQU2'
      )

      setStatus('success')
      setForm({ name:'', email:'', subject:'', message:'' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className="section-label">Let's Connect</div>
        <h2 className="section-title">Get In<br /><span style={{color:'var(--ice)'}}>Touch</span></h2>

        <div className={styles.grid}>
          <div>
            <p className={styles.intro}>
              Open to internships, industry experience, collaborations, and conversations about
              cybersecurity, AI, data science, and building things that matter.
            </p>
            <div className={styles.contactList}>
              {contacts.map(c => (
                <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                   rel="noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIcon}><c.icon size="1em" aria-hidden="true" /></div>
                  <div>
                    <div className={styles.contactLabel}>{c.label}</div>
                    <div className={styles.contactValue}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formHead}>
              <div className={styles.formTitle}>Send a Message</div>
              <div className={styles.formNote}>I'll respond within 24 hours. My AI agent follows up automatically.</div>
            </div>

            {[
              { name:'name',    label:'Your Name',  type:'text',  placeholder:'Jane Smith' },
              { name:'email',   label:'Email',      type:'email', placeholder:'jane@company.com' },
              { name:'subject', label:'Subject',    type:'text',  placeholder:'Internship / Collaboration / ...' },
            ].map(f => (
              <div key={f.name} className={styles.field}>
                <label className={styles.label}>{f.label}</label>
                <input className={styles.input} type={f.type} name={f.name}
                  value={form[f.name]} onChange={handleChange} placeholder={f.placeholder} />
              </div>
            ))}

            <div className={styles.field}>
              <label className={styles.label}>Message</label>
              <textarea className={styles.input} name="message" rows={4}
                value={form.message} onChange={handleChange}
                placeholder="Tell me about the opportunity..." />
            </div>

            <button type="submit" className="btn-primary"
              style={{width:'100%', justifyContent:'center'}}
              disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>

            {status === 'success' && (
              <div className={styles.success}><CircleCheck size="1em" aria-hidden="true" /> Message sent! Michael will get back to you within 24 hours.</div>
            )}
            {status === 'error' && (
              <div className={styles.error}><TriangleAlert size="1em" aria-hidden="true" /> Failed to send. Please email khozamichael21@gmail.com directly.</div>
            )}
            {status !== 'idle' && status !== 'success' && status !== 'error' && status !== 'loading' && (
              <div className={styles.error}>{status}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
