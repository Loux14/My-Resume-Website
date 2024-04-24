
function WelcomePage({onEnter}) {

  return (
    <div className="WelcomePage">
      <p> Lucas G. <br/>Programmer</p>
      <button onClick={onEnter}> Enter</button>
    </div>
  );
}

export default WelcomePage;
