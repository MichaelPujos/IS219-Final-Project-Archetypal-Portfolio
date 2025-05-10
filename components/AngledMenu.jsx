import styles from './AngledMenu.module.css';

export default function AngledMenu() {
  return (
    <div className={styles.menuWrapper}>
      <ul className={styles.menuList}>
        <li className={styles.active}>Skill</li>
        <li>Item</li>
        <li>Equip</li>
        <li>Persona</li>
        <li>Stats</li>
        <li>Quest</li>
        <li>Social Link</li>
        <li>Calendar</li>
        <li>System</li>
      </ul>
    </div>
  );
}
