// src/App.jsx
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'; // RoutesとRouteとLinkをインポート
import { LoginPage } from './LoginPage'; // LoginPageコンポーネントをインポート

export const App = () => {
  const title = "シュミトモ";

  return (
    <>
      {/* 画面全体のルートをRoutesで囲む */}
      <Routes>
        {/* ホーム画面のルート */}
        <Route
          path="/"
          element={
            <div className="title-container">
              <h1 className="title-text">{title}</h1>
              <div className="buttons">
                {/* Linkコンポーネントでログインページへ遷移 */}
                <Link to="/login" className="login-btn">
                  ログイン
                </Link>
                <button className="signup-btn">新規登録</button>
                <button className="start-btn">はじめる</button>
              </div>
            </div>
          }
        />
        {/* ログインページのルート */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};