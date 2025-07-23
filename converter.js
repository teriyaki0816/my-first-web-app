// ここからコードを書いてください
export function setupConverter() {
  // 1. HTMLから必要な要素を取得する
  const converterForm = document.querySelector(".converter-form");
  const inputValue = document.querySelector(".converter-input");
  const fromUnit = document.querySelector(".converter-from");
  const toUnit = document.querySelector(".converter-to");
  const result = document.querySelector(".converter-result");

  // 2. 単位のデータを定義する (メートルを基準にする)
  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  // この下から、実際の処理を書いていくぞ
  // (...lengthUnitの定義の続きから...)

  // 3. ドロップダウンメニューに単位を追加する
  // まずは一度、中身を空にしておく
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  // 用意した単位のデータ(lengthUnit)を一つずつ取り出し、optionタグを生成していく
  for (const unit of lengthUnit) {
    // valueには計算に使う基準値(base)を、表示するテキストには名前(name)を入れる
    const optionHTML = `<option value="${unit.base}">${unit.name}</option>`;
    fromUnit.innerHTML += optionHTML; // From側のメニューに追加
    toUnit.innerHTML += optionHTML; // To側のメニューにも追加
  }

  // 4. 初期状態で選択されている項目を決めておく
  fromUnit.selectedIndex = 0; // 最初の項目 (meter)
  toUnit.selectedIndex = 1; // 2番目の項目 (kilometer)
  // (...selectedIndexの設定の続きから...)

  // 5. 変換を実行して結果を表示する関数を定義する
  function convert() {
    // 入力された値（文字列）を、計算できる数値に変換する
    const value = parseFloat(inputValue.value);

    // もし数値でなければ、メッセージを表示して処理を中断する
    if (isNaN(value)) {
      result.textContent = "Please enter a valid number";
      return;
    }

    // 選択されている単位の基準値を取得する
    const fromBase = fromUnit.value;
    const toBase = toUnit.value;

    // 変換を計算する (一度メートルに直し、そこから変換先の単位にする)
    const convertedValue = (value * fromBase) / toBase;

    // 選択されている単位の名前を取得する
    const fromName = fromUnit.options[fromUnit.selectedIndex].text;
    const toName = toUnit.options[toUnit.selectedIndex].text;

    // 結果を小数点以下3桁に丸めて、テキストとして表示する
    result.textContent = `${value} ${fromName} = ${convertedValue.toFixed(
      3
    )} ${toName}`;
  }

  // 6. フォームのいずれかの入力が変わるたびに、convert関数を実行する
  converterForm.addEventListener("input", convert);

  // 7. ページ読み込み時に、最初の変換を実行しておく
  convert();
}
