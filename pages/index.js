import Header from "../components/header";
import Wrapper from "../components/wrapper";
import { discordLink, rules } from "../config/indexPage";

export default function Home() {
  return (
    <div className="bg-mainbg w-full min-h-screen">
      <Header />
      <Wrapper>
        <div class="font-h1 text-white mb-5">Условия вступления:</div>
        <div class="text-white font-text whitespace-pre-line text-left mb-10">{rules}</div>
        <div class="font-h1 text-white mb-5">Полезные ссылки:</div>
        <div class="font-h2 text-white mb-2">Дискорд: <a href={discordLink} target="_blank" className="text-blue-600 cursor-pointer">клик</a></div>
      </Wrapper>
    </div>
  )
}
