import { Header } from "./components/Header";
import './styles/global.css';

import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <h1>Sidebar</h1>
        </aside>
        <main>
          <h1>Post</h1>
        </main>
      </div>
    </>
  )
}
