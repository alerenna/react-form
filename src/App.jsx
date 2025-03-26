import { useState } from "react";
import Cards from "./components/Cards";

const postList = [
  {
    id: 1,
    title: "Introduzione a React",
    author: "Giulia Bianchi",
    date: "2025-03-25",
    content: "React è una libreria JavaScript per costruire interfacce utente. È basata su componenti riutilizzabili..."
  },
  {
    id: 2,
    title: "Guida al CSS moderno",
    author: "Marco Rossi",
    date: "2025-03-20",
    content: "Il CSS è fondamentale per la grafica di un sito. Oggi vediamo Flexbox, Grid e Media Queries..."
  },
  {
    id: 3,
    title: "JavaScript: i fondamentali",
    author: "Lucia Verdi",
    date: "2025-03-15",
    content: "In questa guida scopriamo le basi del linguaggio JavaScript: variabili, cicli, condizioni e funzioni..."
  },
  {
    id: 4,
    title: "Come funziona Node.js?",
    author: "Alessandro Neri",
    date: "2025-03-10",
    content: "Node.js è un ambiente per eseguire JavaScript lato server. Scopriamo il suo funzionamento e i vantaggi..."
  },
  {
    id: 5,
    title: "Creare una To-Do List in React",
    author: "Francesca Blu",
    date: "2025-03-05",
    content: "Costruire una lista di cose da fare è un esercizio perfetto per imparare lo state management in React..."
  }
];

export default function App() {

  const [newPost, setNewPost] = useState({
    title: '',
    author: '',
    date: '',
    content: ''
  })

  const [posts, setPosts] = useState(postList)

  function handleFormSubmit(e) {
    e.preventDefault()

    console.log(newPost);

    setPosts([...posts, { id: posts[posts.length - 1].id + 1, ...newPost }])
    setNewPost({ title: '', author: '', date: '', content: '' })

    console.log(posts);

  }

  function deletePost(id) {
    setPosts(posts.filter(post => post.id !== id))
  }



  return (
    <>

      <form className="p-5" onSubmit={handleFormSubmit}>

        <div className="mb-3">

          <input
            type="text"
            className="form-control"
            name="new_article_title"
            id="new_article_title"
            aria-describedby="newArticleHelpId"
            placeholder="Il tuo titolo qui"
            value={newPost.title}
            onChange={e => setNewPost({ ...newPost, title: e.target.value })}
          />
          <small id="newArticleHelpId" className="form-text text-muted">Inserisci il titolo del nuovo articolo</small>
        </div>

        <div className="mb-3">

          <input
            type="text"
            className="form-control"
            name="new_article_author"
            id="new_article_author"
            aria-describedby="newArticleHelpId"
            placeholder="L'autore qui"
            value={newPost.author}
            onChange={e => setNewPost({ ...newPost, author: e.target.value })}
          />
          <small id="newArticleHelpId" className="form-text text-muted">L'autore qui</small>
        </div>

        <div className="mb-3">

          <input
            type="text"
            className="form-control"
            name="new_article_date"
            id="new_article_date"
            aria-describedby="newArticleHelpId"
            placeholder="La data qui"
            value={newPost.date}
            onChange={e => setNewPost({ ...newPost, date: e.target.value })}
          />
          <small id="newArticleHelpId" className="form-text text-muted">La data qui</small>
        </div>

        <div className="mb-3">

          <input
            type="text"
            className="form-control"
            name="new_article_content"
            id="new_article_content"
            aria-describedby="newArticleHelpId"
            placeholder="Il tuo contenuto qui"
            value={newPost.content}
            onChange={e => setNewPost({ ...newPost, content: e.target.value })}
          />
          <small id="newArticleHelpId" className="form-text text-muted">Il tuo contenuto qui</small>
        </div>

        <div className="col-12 d-flex justify-content-center">
          <button className="btn btn-primary" type="submit">Inserisci nuovo articolo</button>
        </div>
      </form>


      <ul className="list-group">
        <h1 className="text-center">Lista Post</h1>
        <Cards posts={posts} onDelete={deletePost} />
      </ul>

    </>


  )
}
