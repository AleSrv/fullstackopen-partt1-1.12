import { useState } from "react";
import './App.css';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const initialAnecdote = () => Math.floor(Math.random() * anecdotes.length);

  const [selected, setSelected] = useState(initialAnecdote);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [showWinner, setShowWinner] = useState(false);

  const handleNextAnecdote = () => {
    setShowWinner(false)
    setSelected(initialAnecdote());
  };

  const handleVote = (index) => {
    setShowWinner(false)
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  // Encuentra el índice de la anécdota con más votos
  const mostVotedIndex = votes.indexOf(Math.max(...votes));

  const Ganador = () => {

    return (
      <div>
        <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Anecdota más votada:</p>
        <p style={{
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          backgroundColor: "whitesmoke",
          borderRadius: "5px",
          padding: "10px",
        }}>{`"${anecdotes[mostVotedIndex]}" GANADOR ANECDOTA ${mostVotedIndex} 🏆`}
          <span> con {votes[mostVotedIndex]} {votes[mostVotedIndex] > 1 ? "votos" : "voto"}</span>
        </p>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="full-width">

        <button onClick={handleNextAnecdote}>Next Anecdote</button>
        <p>Anecdota {selected} (con {votes[selected]} {votes[selected] > 1 ? "votos" : "voto"})</p>
        <p style={{
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          backgroundColor: "whitesmoke",
          borderRadius: "5px",
          padding: "10px",
        }}>{`"${anecdotes[selected]}"`}</p>

        <button
          style={{ margin: '20px', fontWeight: 'bold' }}
          onClick={() => handleVote(selected)}
        >
          Vote
        </button>

        <button onClick={() => setShowWinner(true)}>Ver Resultado</button>

      </div>

      {showWinner && votes[mostVotedIndex] > 0 && (
        <Ganador />
      )}
    </div>
  );
};

export default App;
