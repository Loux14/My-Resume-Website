import '../styles/WelcomePage.css';

function WelcomePage({ onEnter }) {
  return (
    <div className="WelcomePage">
      <p> Lucas G. <br />Junior Developer</p>
      <button onClick={onEnter}> Enter</button>
    </div>
  );
}

export default WelcomePage;
