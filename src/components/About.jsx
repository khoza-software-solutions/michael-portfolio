import { Globe, Shield, ChartColumn, Bot, CodeXml as Github, BriefcaseBusiness as Linkedin, Mail } from 'lucide-react'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              CS Student.<br />Builder.<br />
              <span style={{ color: 'var(--ice)' }}>Founder.</span>
            </h2>
            <div className={styles.text}>
              <p>I'm a 3rd-year Computer Science student at Tshwane University of Technology and a studentpreneur building products that matter. My curiosity lives at the crossroads of cybersecurity, data science, and full-stack development.</p>
              <p>Apps need security from the ground up and data-driven decisions baked in — that's the philosophy behind everything I build. I'm actively seeking industry experience to sharpen my craft and scale what I'm creating.</p>
              <p>When I'm not coding, I'm competing — TelkomX, IBM Z Datathon, FNB Hackathon, Hult Prize. I learn best when there's real stakes involved.</p>
            </div>
            <div className={styles.links}>
              <a href="https://github.com/Michael-Khoza" target="_blank" rel="noreferrer" className={styles.link}><Github size="1em" aria-hidden="true" /> GitHub Projects</a>
              <a href="https://www.linkedin.com/in/michael-khoza-65781831b" target="_blank" rel="noreferrer" className={styles.link}><Linkedin size="1em" aria-hidden="true" /> LinkedIn</a>
              <a href="mailto:khozamichael21@gmail.com" className={styles.link}><Mail size="1em" aria-hidden="true" /> Email Me</a>
            </div>
          </div>

          <div className={styles.iciCard}>
            <div className={styles.iciWatermark}>ICI</div>
            <span className={styles.iciBadge}>Enterprise · Est. 2025</span>
            <h3 className={styles.iciName}>Inter-Cyber Intelligence</h3>
            <p className={styles.iciDesc}>
              ICI (Inter-Cyber Intelligence) is an enterprise that develops sophisticated software applications and delivers cutting-edge cybersecurity and data science services — including custom AI agent development. Founded in 2025, ICI exists to help organisations defend against threats, make data-driven decisions, and scale with intelligent technology.
            </p>
            <div className={styles.pillars}>
              {[
                { icon: Globe, title: 'Software Development', desc: 'Web & mobile platforms' },
                { icon: Shield, title: 'Cybersecurity Services', desc: 'Threat intelligence & monitoring' },
                { icon: ChartColumn, title: 'Data Science Services', desc: 'AI-powered insights engine' },
                { icon: Bot, title: 'Custom AI Agents', desc: 'Automated response systems' },
              ].map(p => (
                <div key={p.title} className={styles.pillar}>
                  <span className={styles.pillarTitle}><p.icon size="1em" aria-hidden="true" /> {p.title}</span>
                  {p.desc}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
