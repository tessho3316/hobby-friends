import './App.css'

export const App = () => {
  const title　= "シュミトモ";

  return (
    <body className="title">
      <div className="title-container">
        <h1 className="title-text">{title}</h1>
      </div>
      <div className="buttons">
        <button className="login-btn">ログイン</button>
        <button className="signup-btn">新規登録</button>
        <button className="start-btn">はじめる</button>
      </div>
    </body>
  );
}
