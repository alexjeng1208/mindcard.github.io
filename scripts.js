let cards = [
    { topic: "基礎卡片", title: "開放問題", content: "思考一個你目前面對的問題，然後將它轉化為一個開放式問題。" },
    { topic: "基礎卡片", title: "費斯汀格法則", content: "列出目前問題的所有可能因素。" },
    { topic: "基礎卡片", title: "視覺日記法", content: "用圖像或符號來表示你的問題。" },
    { topic: "基礎卡片", title: "子彈筆記法", content: "用最簡單的列表形式來整理你的問題和可能的解決方案。" },
    { topic: "基礎卡片", title: "PARA分類法", content: "將問題分為項目（Projects）、區域（Areas）、資源（Resources）、檔案（Archives）。" },
    { topic: "基礎卡片", title: "反思", content: "如果你的問題解決了，會帶來什麼影響？" },
    { topic: "基礎卡片", title: "角色扮演", content: "從一個不同的角度（例如：老師、家長、朋友）來看待這個問題。" },
    { topic: "基礎卡片", title: "SWOT分析", content: "分析問題的優點、缺點、機會和威脅。" },
    { topic: "基礎卡片", title: "5W1H", content: "問題的何時、何地、誰、為什麼、如何、和什麼？" },
    { topic: "基礎卡片", title: "金字塔原則", content: "將問題分解為更小的部分。" },
    { topic: "基礎卡片", title: "假設測試", content: "設定一個假設，然後找方法來驗證它。" },
    { topic: "基礎卡片", title: "腦力激盪", content: "在1分鐘內，想出與問題相關的所有單詞或短語。" },
    { topic: "基礎卡片", title: "正面思考", content: "如果一切都順利，最好的結果會是什麼？" },
    { topic: "基礎卡片", title: "負面思考", content: "最壞的情況會是什麼？" },
    { topic: "基礎卡片", title: "第三人稱", content: "用第三人稱的角度來描述你的問題。" },
    { topic: "基礎卡片", title: "時間旅行", content: "如果你能回到過去或未來，你會如何解決這個問題？" },
    { topic: "基礎卡片", title: "比喻法", content: "用一個比喻或故事來描述你的問題。" },
    { topic: "基礎卡片", title: "分類法", content: "將問題分為不同的類型或類別。" },
    { topic: "基礎卡片", title: "疑問句", content: "將你的問題轉化為5個不同的疑問句。" },
    { topic: "基礎卡片", title: "優先順序", content: "將問題的各個方面按照重要性排序。" },
    { topic: "基礎卡片", title: "流程圖", content: "用流程圖來描述問題和可能的解決方案。" },
    { topic: "基礎卡片", title: "對比分析", content: "比較兩個或更多的解決方案。" },
    { topic: "基礎卡片", title: "標籤法", content: "給問題和解決方案貼上標籤或標題。" },
    { topic: "基礎卡片", title: "情緒分析", content: "這個問題讓你感到什麼？為什麼？" },
    { topic: "基礎卡片", title: "外包思考", content: "如果你能請教任何人，你會問誰？他們可能會怎麼說？" },
    { topic: "基礎卡片", title: "逆向思考", content: "如果你想讓問題更糟，你會怎麼做？" },
    { topic: "基礎卡片", title: "資源清單", content: "列出解決問題所需的所有資源。" },
    { topic: "基礎卡片", title: "時間管理", content: "如果你只有一天的時間來解決問題，你會怎麼做？" },
    { topic: "基礎卡片", title: "價值觀", content: "這個問題與你的哪些價值觀相關？" },
    { topic: "基礎卡片", title: "破壞法", content: "忽略所有規則，不受限制地思考問題。" },
    { topic: "基礎卡片", title: "網狀思考", content: "找出問題與其他問題或情境的相互關聯。" },
    { topic: "基礎卡片", title: "評分法", content: "對各個解決方案進行評分，以決定哪個最有效。" },
    { topic: "基礎卡片", title: "疊加法", content: "將兩個不相干的解決方案合併，看看會發生什麼。" },
    { topic: "基礎卡片", title: "模仿法", content: "找一個成功的案例或人物，思考他們會如何解決這個問題。" },
    { topic: "基礎卡片", title: "反駁法", content: "找人反駁你的解決方案，並從中學習。" },
    { topic: "基礎卡片", title: "縮放法", content: "將問題放大或縮小，然後重新評估它。" },
    { topic: "基礎卡片", title: "分步法", content: "將解決方案分解成小步驟。" },
    { topic: "基礎卡片", title: "成本效益分析", content: "解決問題的成本和收益是什麼？" },
    { topic: "基礎卡片", title: "角色交換", content: "與同學或朋友交換卡片，看看他們如何解決你的問題。" },
    { topic: "基礎卡片", title: "隨機詞語", content: "隨機選一個詞，試著將它與你的問題聯繫起來。" },
    { topic: "基礎卡片", title: "歷史回顧", content: "這個問題在歷史上是如何被解決的？" },
    { topic: "基礎卡片", title: "未來展望", content: "10年後，這個問題會變成什麼樣子？" },
    { topic: "基礎卡片", title: "專家意見", content: "尋找或想像一位專家會如何解決這個問題。" },
    { topic: "基礎卡片", title: "隨機瀏覽", content: "隨機瀏覽一本書或網站，看看是否有可用的想法。" },
    { topic: "基礎卡片", title: "五感法", content: "用五感（看、聽、聞、嚐、觸）來描述問題。" },
    { topic: "基礎卡片", title: "限制法", content: "給自己設定一些不必要的限制，看看會怎麼解決問題。" },
    { topic: "基礎卡片", title: "機會成本", content: "如果你選擇一個解決方案，會失去哪些其他機會？" },
    { topic: "基礎卡片", title: "詩意思考", content: "用一首詩來描述你的問題。" },
    { topic: "基礎卡片", title: "信念挑戰", content: "挑戰一個你一直持有的關於這個問題的信念。" },
    { topic: "基礎卡片", title: "感恩法", content: "找出這個問題讓你感到感恩的地方。" }
];

// ... 其他代碼 ...


// ... 其他代碼 ...

// ... 其他代碼 ...

function showRandomCard() {
    // 從卡片庫中隨機選擇一張卡片並顯示
}

function showAddCardForm() {
    // 顯示新增卡片的表單
}

function importCSV(event) {
    // 從CSV檔案中導入卡片
}

function browseCardLibrary() {
    // 瀏覽整個卡片庫
}

function addCard() {
    // 直接新增卡片到卡片庫
}
// ... 之前的代碼 ...

function showRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    displayCard(card);
}

function displayCard(card) {
    const cardLibrary = document.getElementById('card-library');
    cardLibrary.innerHTML = `
        <h2>${card.topic}</h2>
        <h3>${card.title}</h3>
        <p>${card.content}</p>
    `;
}

function showAddCardForm() {
    const form = document.getElementById('addCardForm');
    form.style.display = 'block';
}

function addCard() {
    const topic = document.getElementById('cardTopic').value;
    const title = document.getElementById('cardTitle').value;
    const content = document.getElementById('cardContent').value;

    const newCard = { topic, title, content };
    cards.push(newCard);

    // 清空表單
    document.getElementById('cardTopic').value = '';
    document.getElementById('cardTitle').value = '';
    document.getElementById('cardContent').value = '';

    alert('卡片已新增!');
}

// ... 其他代碼 ...
// ... 之前的代碼 ...

function importCSV(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const rows = e.target.result.split('\n');
            for (let i = 1; i < rows.length; i++) {
                const [topic, title, content] = rows[i].split(',');
                cards.push({ topic, title, content });
            }
            alert('卡片已從CSV導入!');
        };
        reader.readAsText(file);
    }
}
function showGameRules() {
    const cardLibrary = document.getElementById('card-library');
    const addCardForm = document.getElementById('addCardForm');
    const gameRules = document.getElementById('game-rules');

    // 隱藏卡片庫和新增卡片表單
    cardLibrary.style.display = 'none';
    addCardForm.style.display = 'none';

    // 顯示遊戲規則
    gameRules.style.display = 'block';
}


function browseCardLibrary() {
    const cardLibrary = document.getElementById('card-library');
    cardLibrary.innerHTML = '';
    for (const card of cards) {
        cardLibrary.innerHTML += `
            <div class="card">
                <h2>${card.topic}</h2>
                <h3>${card.title}</h3>
                <p>${card.content}</p>
            </div>
        `;
    }
}

// ... 其他代碼 ...
