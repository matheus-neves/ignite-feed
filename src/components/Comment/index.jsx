import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './index.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/24254209?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Neves</strong>
              <time title="03 de Junho às 12:15" dateTime="2022-06-03 09:13:03">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>
            Muito bom Devon, parabéns!!
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
      
    </div>
  )
}