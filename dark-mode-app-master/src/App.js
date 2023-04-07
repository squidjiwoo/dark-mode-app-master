import './App.css';
import { useState } from "react";
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';

function App() {
  // isDark(다크모드 이면) =  true : 아니면 false
  const [isDark, setIsDark] = useState(false);
  const setDarkMode = () => {
    setIsDark(!isDark); // 값을 반전(!not)
  }
  console.log('dark mode? ', isDark);
  return (
    // class 동적으로 변경
    // isDark true = class="dark" 아니면 class=""
    <div className={
      isDark ? "App dark" : "App"
    }>
      <header>
        <h1>Dark mode App</h1>
        <button onClick={setDarkMode}>
          {
            isDark ? <MdDarkMode /> : <MdOutlineDarkMode />
          }
        </button>
      </header>
      <main>
        <h2>Dark Mode Toggle</h2>
        <p>빛과 어둠은 우주에서 가장 기본적인 상태입니다. 빛은 에너지를 나타내고, 어둠은 그 반대입니다. 빛은 우리가 생활하는 데 매우 중요한 역할을 합니다. 우리가 보는 모든 것은 빛의 반사로 인해 가능합니다.
        하지만, 어둠 또한 우리에게 필요한 것입니다. 잠을 자거나 휴식을 취하기 위해서는 적절한 어둠이 필요합니다. 어둠은 또한 우리가 빛을 더욱 감사하게 생각할 수 있도록 도와줍니다. 빛과 어둠은 서로 보완적인 역할을 하며 우리 삶에 큰 의미를 갖습니다.</p>
      </main>
    </div>
  );
}

export default App;
