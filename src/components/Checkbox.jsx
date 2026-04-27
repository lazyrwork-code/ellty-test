const Checkbox = ({ state, onChange, label }) => {
  const getClassName = () => {
    let cls = 'cb-box'
    if (state === 'checked') cls += ' checked'
    if (state === 'indeterminate') cls += ' indeterminate'
    return cls
  }

  return (
    <div className="cb-row" onClick={onChange}>
      <span className="cb-label">{label}</span>
      <div className={getClassName()}>
        {state === 'checked' && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <polyline points="2,7 5.5,11 12,3" stroke="#fff" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {state === 'indeterminate' && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="3" y1="7" x2="11" y2="7" stroke="#2563EB"
              strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </div>
    </div>
  )
}

export default Checkbox