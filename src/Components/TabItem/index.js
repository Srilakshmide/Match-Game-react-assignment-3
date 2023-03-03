import './index.css'

const TabItem = props => {
  const {tabDate, isActive, onClickTabItem} = props
  const {tabId, displayText} = tabDate

  const tabClassName = isActive ? 'display-text active' : 'display-text'

  const onClickTab = () => {
    onClickTabItem(tabId)
  }

  return (
    <li className="tab-list">
      <button type="button" className={tabClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
