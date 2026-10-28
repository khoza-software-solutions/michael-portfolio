import { Mail, Brain, MessageCircle, Zap, Bot } from 'lucide-react'
import { useEffect } from 'react'
import styles from './AIAgent.module.css'

const JOTFORM_SCRIPT = 'https://cdn.jotfor.ms/agent/embedjs/019e4cc3c0c1778d9c1afe73dce0d1aac291/embed.js?autoOpenChatIn=0'
const JOTFORM_SCRIPT_ID = 'jotform-agent-script'

const features = [
  { icon: Mail, color:'lime',   title:'Auto Email Follow-up',           desc:"Automatically sends a personalised follow-up email to every visitor who reaches out — no manual effort needed, every lead is captured." },
  { icon: Brain, color:'ice',    title:'Knows Everything About Michael', desc:"Trained on Michael's full profile — skills, ICI services, credentials, competition history and availability. Handles recruiter and client questions instantly." },
  { icon: MessageCircle, color:'orange', title:'WhatsApp & LinkedIn',            desc:"Instantly shares Michael's WhatsApp link and LinkedIn profile when asked — connecting people directly without friction." },
  { icon: Zap, color:'lime',   title:'More Actions Coming Soon',       desc:"Expanding capabilities include: scheduling meetings, collecting CVs, qualifying leads, running surveys, accepting payments, and booking appointments — all automated." },
]

function openJotformAgent() {
  const bubble = document.querySelector('.ai-agent-avatar.size-md')
  if (bubble) {
    bubble.click()
    return
  }
  // Fallback: try after short delay in case widget hasn't fully loaded
  setTimeout(() => {
    const delayed = document.querySelector('.ai-agent-avatar.size-md')
    if (delayed) {
      delayed.click()
    } else {
      window.open('https://agent.jotform.com/019e4cc3c0c1778d9c1afe73dce0d1aac291', '_blank')
    }
  }, 1500)
}

export default function AIAgent() {
  useEffect(() => {
    if (
      document.getElementById(JOTFORM_SCRIPT_ID) ||
      document.querySelector(`script[src*="019e4cc3c0c1778d9c1afe73dce0d1aac291"]`)
    ) {
      return
    }
    const script = document.createElement('script')
    script.id = JOTFORM_SCRIPT_ID
    script.src = JOTFORM_SCRIPT
    script.async = true
    script.onload = () => {
      setTimeout(() => {
        const bubble = document.querySelector('[class*="avatar"], [class*="bubble"], [class*="launcher"]')
        if (bubble) bubble.setAttribute('data-jotform-bubble', 'true')
      }, 2000)
    }
    document.body.appendChild(script)
  }, [])

  return (
    <section id="agent" className={styles.section}>
      <div className={styles.glow}></div>
      <div className="container">
        <div className="section-label">Powered by Jotform AI</div>
        <h2 className="section-title">My AI<br /><span style={{color:'var(--lime)'}}>Agent</span></h2>
        <p className={styles.sub}>
          Ask it anything about me — skills, ICI services, availability, projects.
          It sends automatic follow-up emails and shares my profiles instantly.
        </p>

        <div className={styles.grid}>
          <div className={styles.features}>
            {features.map(f => (
              <div key={f.title} className={styles.feature}>
                <div className={`${styles.featureIcon} ${styles[f.color]}`}><f.icon size="1em" aria-hidden="true" /></div>
                <div>
                  <div className={styles.featureTitle}>{f.title}</div>
                  <div className={styles.featureDesc}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.agentBox}>
            <div className={styles.agentHeader}>
              <div className={styles.agentAvatar}>MK</div>
              <div>
                <div className={styles.agentName}>Michael's AI Agent</div>
                <div className={styles.agentStatus}>
                  <span className={styles.statusDot}></span>
                  Online · Powered by Jotform
                </div>
              </div>
            </div>
            <div className={styles.placeholder}>
              <div className={styles.placeholderIcon}><Bot size="1em" aria-hidden="true" /></div>
              <div className={styles.placeholderTitle}>Chat with my AI Agent</div>
              <div className={styles.placeholderDesc}>
                Click the button below or the bubble in the{' '}
                <strong style={{color:'var(--lime)'}}>bottom right corner</strong>{' '}
                to start. The agent answers questions, shares my GitHub &amp; LinkedIn,
                and sends a follow-up email automatically.
              </div>
              <button
                type="button"
                className="btn-primary"
                style={{marginTop:'1rem'}}
                onClick={openJotformAgent}
              >
                <MessageCircle size="1em" aria-hidden="true" /> Open Agent Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
