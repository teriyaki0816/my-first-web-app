// ここからコードを書いてください
// ./js/tabs.js から setupTabs という部品を読み込む
import { setupTabs } from "./js/tabs.js";
import { setupConverter } from "./js/converter.js";
// HTMLの読み込みが終わったら、中の処理を実行する、というおまじないじゃ
document.addEventListener("DOMContentLoaded", () => {
  // ここで、さっき作った部品を実行する！
  setupTabs();
  setupConverter();
});
