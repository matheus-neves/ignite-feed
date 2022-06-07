import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './index.module.css'

export function Post({ author, content, publishedAt }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            source="https://avatars.githubusercontent.com/u/24254209?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Diogo Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="03 de Junho às 12:15" dateTime="2022-06-03 09:13:03">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="#">jane.design/doctorcare</a></p>

        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}