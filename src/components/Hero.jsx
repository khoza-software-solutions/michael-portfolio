import { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import michaelPhoto from '../assets/michael.jpg'
import michaelPhotoOne from '../assets/mypic1.jpeg'
import michaelPhotoTwo from '../assets/mypic2.jpeg'
import { Pause, Play, FileText, Download } from 'lucide-react'
import michaelCV from '../assets/Michael-Khoza-CV.pdf'

const portraits = [
  { src: michaelPhoto, crop: styles.originalPortrait, alt: 'Michael Khoza wearing sunglasses' },
  { src: michaelPhotoOne, crop: styles.jacketPortrait, alt: 'Michael Khoza in a leather jacket' },
  { src: michaelPhotoTwo, crop: styles.suitPortrait, alt: 'Michael Khoza in a suit' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [portraitIndex, setPortraitIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  useEffect(() => {
    if (paused || reducedMotion) return
    const timer = setInterval(() => setPortraitIndex(index => (index + 1) % portraits.length), 4800)
    return () => clearInterval(timer)
  }, [paused, reducedMotion])

  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.glow} ${styles.glowTop}`}></div>
      <div className={`${styles.glow} ${styles.glowBottom}`}></div>

      <div className={`container ${styles.layout} ${visible ? styles.visible : ''}`}>
        <div className={styles.left}>
          <div className={styles.tag}>
            <span className={styles.tagDot}></span>
            3rd Year CS · TUT · Studentpreneur
          </div>

          <h1 className={styles.name}>
            Michael<br /><span className={styles.accent}>Khoza</span>
          </h1>

          <p className={styles.sub}>
            Building fully-fledged intelligent applications at the intersection of
            Cybersecurity, Data Science, and AI — founder of ICI (Inter-Cyber Intelligence).
          </p>

          <div className={styles.btns}>
            <a href="#contact" className="btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Get In Touch →
            </a>
            <a href="https://github.com/Michael-Khoza" target="_blank" rel="noreferrer" className="btn-secondary">
              View Projects ↗
            </a>
            <a href={michaelCV} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FileText size={18} aria-hidden="true" /> View CV
            </a>
            <a href={michaelCV} download="Michael-Khoza-CV.pdf" className="btn-secondary">
              <Download size={18} aria-hidden="true" /> Download CV
            </a>
          </div>

          <div className={styles.stats}>
            {[
              { num: '13', label: 'Credentials' },
              { num: '7',  label: 'Pitching Competitions' },
              { num: 'ICI', label: 'Startup Founder', accent: true },
            ].map(s => (
              <div key={s.label} className={styles.statItem}>
                <div className={styles.statNum} style={s.accent ? { color: 'var(--lime)' } : {}}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.photoWrap}>
          <div className={styles.photoGlow}></div>
          <div className={styles.photoRing}>
            <div className={styles.photoInner}>
              {portraits.map((portrait, index) => (
                <div key={portrait.src} className={`${styles.slide} ${index === portraitIndex ? styles.activeSlide : ''} ${paused || reducedMotion ? styles.staticSlide : ''}`} aria-hidden={index !== portraitIndex}>
                  <img src={portrait.src} alt={portrait.alt} className={`${styles.photo} ${portrait.crop}`} />
                </div>
              ))}
            </div>
          </div>
          {!reducedMotion && (
            <button type="button" className={styles.slideshowToggle} onClick={() => setPaused(value => !value)} aria-label={paused ? 'Play portrait slideshow' : 'Pause portrait slideshow'} title={paused ? 'Play portrait slideshow' : 'Pause portrait slideshow'}>
              {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
            </button>
          )}
          <div className={styles.photoBadge}>
            <span className={styles.badgeDot}></span>
            <span className={styles.badgeText}>Open to Work</span>
          </div>
        </div>
      </div>
    </section>
  )
}
