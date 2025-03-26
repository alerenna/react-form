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
  return (
    <>
      {postList.map((post) => (
        <div className="container">
          <h1 className=" d-flex text-center p-2 align-items-center justify-content-center">{post.title}</h1>
        </div>
      ))}
    </>


  )
}
