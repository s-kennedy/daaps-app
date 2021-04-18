const Doorway = ({ onClick }) => (
  <div className="doorway-outer">
    <button className="doorway" aria-label="Click to view prompt" onClick={onClick}>
      <div className="background" />
      <div className="foreground" />
      <div className="depth" />
    </button>
  </div>
)

export default Doorway