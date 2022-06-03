import { Header } from "./components/Header";
import './styles/global.css';

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>Post</h1>
        </main>
      </div>
    </>
  )
}
