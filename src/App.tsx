import './App.css';

import { Cloud } from 'laf-client-sdk';
import React, { useState } from 'react';

import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);
  // 创建 cloud 对象 这里需要将 <appid> 替换成自己的 App ID
  const cloud = new Cloud({
    baseUrl: 'https://smi590.laf.dev',
    getAccessToken: () => '', // 这里不需要授权，先填空
  });

  async function send() {
    /**
     * todo 我们提问的内容
     */
    // const message = question.value;
    //
    // let res;
    // // 与云函数逻辑一样，有上下文 id 就传入
    // if (!parentMessageId.value) {
    //     res = await cloud.invoke("send", {message});
    // } else {
    //     res = await cloud.invoke("send", {message, parentMessageId: parentMessageId.value});
    // }
    //
    // // 回复我们的内容在 res.text
    //
    // // 这个是上下文 id
    // parentMessageId.value = res.id;

    const message = '你是谁';
    const res = await cloud.invoke('send', { message });
    console.log(res);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="header">
          🚀 Vite + React + Typescript 🤘 & <br />
          Eslint 🔥+ Prettier
        </p>

        <div className="body">
          <button
            onClick={
              // () => setCount((count) => count + 1)
              () => send()
            }
          >
            🪂 Click me : {count}
          </button>

          <p> Don&apos;t forgot to install Eslint and Prettier in Your Vscode.</p>

          <p>
            Mess up the code in <code>App.tsx </code> and save the file.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
