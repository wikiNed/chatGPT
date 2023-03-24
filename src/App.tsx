import './App.css';

import { Input } from 'antd';
import { Cloud } from 'laf-client-sdk';
import React, { useState } from 'react';

import logo from './logo.svg';

function App() {
  const [msg, setMsg] = useState(undefined as unknown as string);
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
    // parentMessageId.value = res.id
    const res = await cloud.invoke('send', { message: msg });
    console.log(res);
  }

  return (
    <div className="App">
      <Input
        defaultValue={msg}
        onChange={(e) => setMsg(e.target.value)}
        onPressEnter={() => send()}
      />
    </div>
  );
}

export default App;
