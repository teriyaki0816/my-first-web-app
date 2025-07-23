// ここからコードを書いてください
// この関数を他のファイルから呼び出せるように export をつけておくぞ
export function setupTabs() {
  // 1. 操作したいHTML要素を取得する
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");

  // 2. 「Unit Converter」タブがクリックされた時の処理
  converterTab.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    converterSection.classList.remove("hidden");
  });

  // 3. 「Home」リンクがクリックされた時の処理
  homeLink.addEventListener("click", () => {
    converterSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
  });
}
