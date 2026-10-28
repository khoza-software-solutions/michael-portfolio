import { Globe, Settings, Smartphone, Bot, LockKeyhole, Rocket } from 'lucide-react'
import styles from './Skills.module.css'

const groups = [
  { icon: Globe, name: 'Web Frontend',    tags: [{l:'React','c':'lime'},{l:'JavaScript','c':'lime'},{l:'HTML5'},{l:'CSS3'}] },
  { icon: Settings, name: 'Backend & Data',  tags: [{l:'Supabase','c':'ice'},{l:'SQL','c':'ice'},{l:'Python'},{l:'Java'}] },
  { icon: Smartphone, name: 'Mobile Dev',      tags: [{l:'Flutter','c':'orange'},{l:'Dart','c':'orange'},{l:'Firebase'}] },
  { icon: Bot, name: 'AI & Automation', tags: [{l:'Jotform AI','c':'lime'},{l:'AI Agents','c':'lime'},{l:'Automation'}] },
  { icon: LockKeyhole, name: 'Cybersecurity',   tags: [{l:'Vulnerability Mgmt','c':'ice'},{l:'GRC','c':'ice'},{l:'IBM Z Security'}] },
  { icon: Rocket, name: 'Hosting & Deploy',tags: [{l:'Vercel','c':'orange'},{l:'Web Hosting','c':'orange'},{l:'GitHub'}] },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className="section-label">Technical Stack</div>
        <h2 className="section-title">Skills &<br /><span style={{color:'var(--lime)'}}>Technologies</span></h2>
        <div className={styles.grid}>
          {groups.map(g => (
            <div key={g.name} className={styles.card}>
              <div className={styles.icon}><g.icon size="1em" aria-hidden="true" /></div>
              <div className={styles.name}>{g.name}</div>
              <div className={styles.tags}>
                {g.tags.map(t => (
                  <span key={t.l} className={`${styles.tag} ${t.c ? styles[t.c] : ''}`}>{t.l}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
