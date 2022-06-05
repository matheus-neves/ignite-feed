import styles from './index.module.css'

export function Avatar({ source, hasBorder = true }) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={source}
    />
  )
}