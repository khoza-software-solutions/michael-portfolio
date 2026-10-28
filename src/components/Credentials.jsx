import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import styles from './Credentials.module.css'

const ibm = [
  { num:'12', issuer:'IBM', name:'IBM Cybersecurity Certificate', date:'Aug 2026' },
  { num:'13', issuer:'IBM', name:'IBM Z Xplore Advanced', date:'Jul 2026' },
  { num:'01', issuer:'IBM SkillsBuild', name:'Getting Started with Data',                              date:'Jan 28, 2026' },
  { num:'02', issuer:'IBM SkillsBuild', name:'Data Fundamentals',                                      date:'Jan 30, 2026' },
  { num:'03', issuer:'IBM SkillsBuild', name:'Enterprise Data Science in Practice',                    date:'Mar 31, 2026' },
  { num:'04', issuer:'IBM',             name:'Governance, Risk, Compliance, and Data Privacy',         date:'Apr 1, 2026'  },
  { num:'05', issuer:'IBM',             name:'Vulnerability Management',                               date:'Apr 4, 2026'  },
  { num:'06', issuer:'IBM',             name:'IBM Z Xplore — Concepts',                               date:'Mar 15, 2026' },
  { num:'07', issuer:'IBM',             name:'IBM Z and LinuxONE Community Contributor 2026 (Level 1)',date:'Apr 7, 2026'  },
  { num:'08', issuer:'IBM',             name:'IBM Z Day 2025 — IBM Z Skills',                         date:'Dec 3, 2025'  },
  { num:'09', issuer:'IBM',             name:'IBM Z Day 2025 — Modernization',                        date:'Dec 3, 2025'  },
  { num:'10', issuer:'IBM',             name:'IBM Z Day 2025 — Security',                             date:'Dec 3, 2025'  },
  { num:'11', issuer:'IBM SkillsBuild', name:'Make Agentic AI Work for You',                          date:'May 15, 2026' },
]

const other = [
  { num:'01', issuer:'FNB App Academy',            name:'Full Stack Development Certificate',                                      date:'Certified' },
  { num:'02', issuer:'Entrepreneurship Programme', name:'Online Entrepreneurship — 6-Day Face-to-Face Business & Scaling Training', date:'Certified' },
]

export default function Credentials() {
  const [tab, setTab] = useState('ibm')

  return (
    <section id="credentials" className={styles.section}>
      <div className="container">
        <div className="section-label">Verified Achievements</div>
        <h2 className="section-title">Digital<br /><span style={{color:'var(--ice)'}}>Credentials</span></h2>

        <div className={styles.tabs}>
          <button className={`${styles.tab} ${tab==='ibm' ? styles.active : ''}`} onClick={() => setTab('ibm')}>IBM Credentials ({ibm.length})</button>
          <button className={`${styles.tab} ${tab==='other' ? styles.active : ''}`} onClick={() => setTab('other')}>Other Credentials (2)</button>
        </div>

        <a className="btn-secondary" href="https://www.credly.com/users/michael-khoza.6ad0b0ca" target="_blank" rel="noopener noreferrer" style={{ marginBottom: '2rem' }}>
          View My Credly Profile <ExternalLink size={16} aria-hidden="true" />
        </a>

        <div className={styles.grid}>
          {(tab === 'ibm' ? ibm : other).map(c => (
            <div key={c.num} className={`${styles.card} ${tab==='other' ? styles.cardOther : ''}`}>
              <div className={styles.num}>{c.num}</div>
              <div className={styles.issuer}>{c.issuer}</div>
              <div className={styles.name}>{c.name}</div>
              <div className={styles.date}>
                <span className={`${styles.dot} ${tab==='other' ? styles.dotLime : ''}`}></span>
                {c.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
