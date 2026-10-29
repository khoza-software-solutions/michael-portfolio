import styles from './Experience.module.css'
import { ExternalLink } from 'lucide-react'

const events = [
  { year:'2025', title:'FNB Hackathon', org:'First National Bank · South Africa', desc:'Built fintech solutions under pressure and presented to industry professionals in the financial technology space.' },
  { year:'2025', title:'TelkomX Hackathon', org:'Telkom · South Africa', desc:'Built and pitched a technology solution within a tight hackathon window — prototyping, iterating, and presenting to Telkom industry judges.' },
  { year:'2025', title:'IBM Z Datathon', org:'IBM · Data Science Competition', desc:'Applied data science skills on IBM Z mainframe infrastructure, solving real-world data challenges with exposure to enterprise-grade systems.' },
  { year:'2026', title:'Hult Prize Local Competition', org:'Hult Prize · TUT Internal Rounds', desc:'Placed third in the internal rounds hosted by Tshwane University of Technology. Developing and pitching a venture with social and economic impact gave me the confidence to take Agri-Ally beyond the competition and start building a real business.' },
  { year:'Jun 2026', title:'EDHE InnoVarsity 2026 Internal Rounds', org:'EDHE InnoVarsity · Participant', desc:'Participating in the internal rounds reminded me that entrepreneurial growth takes repeated effort. I did not win, but the experience taught me to keep refining how I communicate my business idea and to return to the work with resilience and purpose.' },
  { year:'Jul 2026', title:'YouthInBusiness 2026', org:'YouthInBusiness · Participant', desc:'This competition challenged me to keep showing up for my entrepreneurial journey. Although I did not win, I learned to separate a competition result from my potential, strengthen my confidence, and keep working on the entrepreneur I want to become.' },
  { year:'Aug 2026', title:'Pop up Pitching Competition 2026', org:'Pop up Pitching Competition · Participant', desc:'Another pitch was another opportunity to practise courage and persistence. I did not take home a win, but I left with a stronger commitment to improving my pitch, staying consistent, and turning each setback into a reason to keep building.' },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className="section-label">Milestones & Pitching Competitions</div>
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
          <h3 className={styles.title}>Pitching Competitions</h3>
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
