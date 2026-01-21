import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Logo 区域 */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noopener"
            className="transition-transform hover:scale-110 hover:rotate-6 duration-300">
            <img src={viteLogo} className="h-24 w-24 drop-shadow-lg" alt="Vite logo" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener"
            className="transition-transform hover:scale-110 hover:-rotate-6 duration-300">
            <img src={reactLogo} className="h-24 w-24 drop-shadow-lg animate-spin-slow" alt="React logo" />
          </a>
        </div>

        {/* 标题 */}
        <h1 className="text-5xl font-bold text-center mb-8 bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Vite + React
        </h1>

        {/* ���片 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          {/* 计数按钮 */}
          <div className="flex flex-col items-center gap-6">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 active:scale-95">
              计数: <span className="text-2xl font-bold">{count}</span>
            </button>

            {/* 提示信息 */}
            <p className="text-slate-300 text-center">
              编辑 <code className="px-2 py-1 bg-black/30 rounded text-cyan-400 font-mono">src/App.tsx</code>{' '}
              并保存以测试热更新
            </p>
          </div>
        </div>

        {/* 底部提示 */}
        <p className="text-center mt-8 text-slate-400 text-sm">点击 Vite 和 React 标志了解更多信息</p>
      </div>
    </div>
  )
}

export default App
