import styles from './Experience.module.css'
import { ExternalLink } from 'lucide-react'

const events = [
  { year:'2026', title:'Hult Prize Local Competition', org:'Hult Prize Foundation · Local', desc:'Competed in the Hult Prize local competition, developing a venture concept addressing a real-world challenge with measurable social and economic impact.' },
  { year:'2025', title:'FNB Hackathon', org:'First National Bank · South Africa', desc:'Built fintech solutions under pressure and presented to industry professionals in the financial technology space.' },
  { year:'2025', title:'IBM Z Datathon', org:'IBM · Data Science Competition', desc:'Applied data science skills on IBM Z mainframe infrastructure, solving real-world data challenges with exposure to enterprise-grade systems.' },
  { year:'2025', title:'TelkomX Hackathon', org:'Telkom · South Africa', desc:'Built and pitched a technology solution within a tight hackathon window — prototyping, iterating, and presenting to Telkom industry judges.' },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className="section-label">Milestones & Competition Track Record</div>
        <h2 className="section-title">From Competing<br /><span style={{color:'var(--lime)'}}>To Building</span></h2>
        <div className={styles.list}>
          <article className={styles.card}>
            <div className={styles.year}>2026</div>
            <div>
              <h3 className={styles.title}>Agri-Ally</h3>
              <div className={styles.org}>Founder & CEO</div>
              <p className={styles.desc}>
                After placing third in the Hult Prize internal rounds hosted by Tshwane University of Technology,
                I took Agri-Ally from a competition idea into a real business. As Founder & CEO, I have been
                turning the concept into a working platform while learning what it takes to lead and execute consistently.
              </p>
              <h4 className={styles.detailHeading}>Engineering Challenges</h4>
              <p className={styles.desc}>
                Choosing the framework and software architecture meant thinking beyond the first prototype.
                Following the software development life cycle, I worked with Google APIs, navigated Supabase
                and its backend functions, and designed user flows for every role involved. Integrating a
                payment system tailored to the site was particularly complex, requiring careful attention
                to how the different parts of the platform work together.
              </p>
              <h4 className={styles.detailHeading}>Lessons Beyond the Code</h4>
              <p className={styles.desc}>
                Agri-Ally taught me more than software engineering: how to execute with consistency,
                take ownership of decisions, and develop as a leader. Turning an idea into a business
                has meant connecting technical choices with the needs of the people using the product.
              </p>
              <a className="btn-secondary" href="https://agri-ally.co.za" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1rem' }}>
                Visit Agri-Ally <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </article>
          {events.map(e => (
            <div key={e.title} className={styles.card}>
              <div className={styles.year}>{e.year}</div>
              <div>
                <div className={styles.title}>{e.title}</div>
                <div className={styles.org}>{e.org}</div>
                <div className={styles.desc}>{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
