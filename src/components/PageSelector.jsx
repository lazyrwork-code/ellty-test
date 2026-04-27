import { useState } from 'react'
import Checkbox from './Checkbox'
import Button from './Button'

const PAGES = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5', 'Page 6']

const PageSelector = () => {
  const [selected, setSelected] = useState(new Set())

  const togglePage = (index) => {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  const toggleAll = () => {
    if (selected.size === PAGES.length) setSelected(new Set())
    else setSelected(new Set(PAGES.map((_, i) => i)))
  }

  const getAllState = () => {
    if (selected.size === 0) return 'unchecked'
    if (selected.size === PAGES.length) return 'checked'
    return 'indeterminate'
  }

  return (
    <div className="ps-card">
      <Checkbox
        label="All pages"
        state={getAllState()}
        onChange={toggleAll}
      />
      <div className="ps-divider" />
      <div className="ps-scroll">
        {PAGES.map((page, i) => (
          <Checkbox
            key={i}
            label={page}
            state={selected.has(i) ? 'checked' : 'unchecked'}
            onChange={() => togglePage(i)}
          />
        ))}
      </div>
      <div className="ps-footer">
        <Button onClick={() => {}}>Done</Button>
      </div>
    </div>
  )
}

export default PageSelector