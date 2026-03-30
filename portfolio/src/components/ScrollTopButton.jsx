export default function ScrollTopButton({ visible }) {
  if (!visible) return null

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button onClick={scrollToTop} className="scroll-top" aria-label="Scroll to top">
      ↑
    </button>
  )
}
