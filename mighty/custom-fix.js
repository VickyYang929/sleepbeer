// ✅ 自动等待 RISE 页面加载完成后执行
(() => {
    let hasRun = false;
    let tries = 0;
    const maxTries = 20;

    const tryRun = () => {
        const quizReady = document.querySelector('[data-block-id="cmad1g2v2000h3b7ynrc8sl2l"]');
        const coverReady = document.querySelector("div.cover__header-content");

        if (quizReady && coverReady && !hasRun) {
            try {
                runCoverUI();
                runQuizUI();
                hasRun = true;
                console.log("✅ PowerUp enhancements applied!");
            } catch (e) {
                console.error("❌ PowerUp error:", e);
            }
        }

        tries++;
        if (!hasRun && tries < maxTries) {
            setTimeout(tryRun, 500);
        }
    };

    tryRun();
})();

// ✅ 封面页美化函数
function runCoverUI() {
    const cover = document.querySelector("div.cover__header-content");
    if (!cover) return;

    cover.style.display = "flex";
    cover.style.flexDirection = "column";
    cover.style.justifyContent = "center";
    cover.style.alignItems = "center";
    cover.style.height = "100vh";
    cover.style.padding = "0";
    cover.style.margin = "0";
    cover.style.maxWidth = "100%";
    cover.style.position = "relative";

    // logo
    const logo = document.createElement("img");
    logo.src = "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746565818/Baillies_Brewery_Logo_Black_zfffkr.png";
    logo.style.width = "120px";
    logo.style.marginBottom = "20px";
    cover.insertBefore(logo, cover.firstChild);

    // beer image
    const beerImg = document.createElement("img");
    beerImg.src = "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746566274/beer2_hx0bm3.png";
    beerImg.style.position = "absolute";
    beerImg.style.bottom = "0";
    beerImg.style.left = "50%";
    beerImg.style.transform = "translateX(-50%)";
    beerImg.style.width = "380px";
    beerImg.style.maxWidth = "90vw";
    beerImg.style.pointerEvents = "none";
    cover.appendChild(beerImg);

    // 隐藏下方内容
    const nextSection = document.querySelector(".cover__details");
    if (nextSection) {
        nextSection.style.display = "none";
    }
}


// ✅ Quiz UI + Carousel 部分（你的原始逻辑）
function runQuizUI() {
    const blockIds = [
        "cmad1g2v2000h3b7ynrc8sl2l", // Q1
        "cmad454dn004e3b7ypkalkioz",
        "cmad4x2la000y3b7xjar85yz0",
        "cmad4x3o4001v3b7xl5rp0qgt",
        "cmad4x5m2003p3b7x6bjy4fgq",
        "cmad6o4zs00nc3b7y9y5s26nu",
    ];

    const beerInfos = [
        [
            { name: "Pilsner", desc: "Crisp and clean. Light body.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582526/Subject_7_dqjgyh.png" },
            { name: "IPA", desc: "Bitter and bold. Citrus-forward.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582305/Subject_4_w4ibfu.png" },
            { name: "Stout", desc: "Heavy and dark. Tastes like coffee.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582313/Subject_6_bdkcz4.png" },
            { name: "Amber", desc: "Light and refreshing. Great for beginners.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582309/Subject_5_usxyf3.png" },
            { name: "Sour", desc: "Hoppy with strong bitterness. For bold palates.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746583066/Subject_8_rhpzj7.png" },
            { name: "Hefeweizen", desc: "Dark roasted flavor. Rich and creamy.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746583131/Subject_9_lvt62m.png" }
        ],
        [
            { name: "Pilsner", desc: "Crisp and clean. Light body.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582526/Subject_7_dqjgyh.png" },
            { name: "IPA", desc: "Bitter and bold. Citrus-forward.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582305/Subject_4_w4ibfu.png" },
            { name: "Stout", desc: "Heavy and dark. Tastes like coffee.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582313/Subject_6_bdkcz4.png" },
            { name: "Amber", desc: "Light and refreshing. Great for beginners.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582309/Subject_5_usxyf3.png" },
            { name: "Sour", desc: "Hoppy with strong bitterness. For bold palates.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746583066/Subject_8_rhpzj7.png" },
            { name: "Hefeweizen", desc: "Dark roasted flavor. Rich and creamy.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746583131/Subject_9_lvt62m.png" }
        ],
        [
            { name: "Pilsner", desc: "Crisp and clean. Light body.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582526/Subject_7_dqjgyh.png" },
            { name: "IPA", desc: "Bitter and bold. Citrus-forward.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582305/Subject_4_w4ibfu.png" },
            { name: "Stout", desc: "Heavy and dark. Tastes like coffee.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582313/Subject_6_bdkcz4.png" },
            { name: "Amber", desc: "Light and refreshing. Great for beginners.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582309/Subject_5_usxyf3.png" },
            { name: "Sour", desc: "Hoppy with strong bitterness. For bold palates.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746583066/Subject_8_rhpzj7.png" },
            { name: "Hefeweizen", desc: "Dark roasted flavor. Rich and creamy.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582526/Subject_7_dqjgyh.png" }
        ],
        [
            { name: "IPA is sweeter than Pilsner because it contains more malt sugars.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746585113/numbericon1_lrvmbd.png" },
            { name: "IPA is typically more bitter than Pilsner due to higher hop content and has a stronger aroma.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746585115/icon-number-2_lmapyz.png" },
            { name: "Pilsner is a dark beer, while IPA is usually light-colored.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746585117/icon-number-3_bv00jb.png" },
        ],
        [
            { name: "Amber is heavier than Stout and often has roasted coffee flavors.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746585113/numbericon1_lrvmbd.png" },
            { name: " Stout has strong fruity notes, while Amber ales are generally more bitter.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746585115/icon-number-2_lmapyz.png" },
            { name: "Stouts tend to have rich roasted flavors like chocolate and coffee, while Ambers are more caramel and nutty.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746585117/icon-number-3_bv00jb.png" },
        ],
        [
            { name: "Wheat beers are made with lactic fermentation and are usually more sour, while Sours are sweeter due to wheat content.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746585113/numbericon1_lrvmbd.png" },
            { name: "Wheat beers are smooth, light, and often have banana or clove aromas. Sours have a pronounced tartness and are for fans of sour flavors.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746585115/icon-number-2_lmapyz.png" },
            { name: "They’re basically the same—Wheat beers are from Germany, and Sours are from Belgium.", img: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746585117/icon-number-3_bv00jb.png" },
        ],
    ];

    const personas = [
        {
            avatar: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746568895/persona1_uovsfd.png",
            name: "Emily, 28",
            quote: "“我不太喜欢苦的饮料，想找点轻松入门的啤酒！”",
            question: "Which beer would you recommend for Emily?"
        },
        {
            avatar: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582286/persona2_knnzwj.png",
            name: "Jack, 35",
            quote: "“我喜欢浓郁又有咖啡味的饮品。”",
            question: "Which beer suits Jack's taste?"
        },
        {
            avatar: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582293/persona5_ztmmux.png",
            name: "Lena, 24",
            quote: "“我想试试果香味明显的啤酒，有推荐吗？”",
            question: "Which beer fits Lena’s preference?"
        },
        {
            avatar: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582289/persona3_pzvfqo.png",
            name: "Mike, 29",
            quote: "“I recently saw both IPA and Pilsner labeled as ‘crisp’ in the store. He's confused—what's the actual difference?”",
            question: "Can you tell Mike the difference?"
        },
        {
            avatar: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582295/persona6_qippbd.png",
            name: "Jenn, 29",
            quote: "“Stout and Amber ales both look pretty dark—how do they taste different?”",
            question: "Can you tell Jenn the difference?"
        },
        {
            avatar: "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746582292/persona4_fp2xuc.png",
            name: "Davis, 35",
            quote: "“Stout and Amber ales both look pretty dark—how do they taste different?”",
            question: "Can you tell Davis the difference?"
        },
    ];

    function styleQuizCard(block, idx) {
        const title = block.querySelector(".quiz-card__title");
        const p = personas[idx];
        const beers = beerInfos[idx];
        const options = block.querySelectorAll(".quiz-multiple-choice-option");

        // 清空原题干内容并重建标题
        if (title) {
            title.innerHTML = `
      <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 16px;">
        <img src="${p.avatar}" alt="Avatar" style="width: 80px; border-radius: 50%; box-shadow: 0 0 6px rgba(0,0,0,0.1);">
        <div>
          <div style="font-size: 16px; font-weight: 600;">${p.name}</div>
          <div style="font-size: 14px; font-style: italic; color: #5c3d0f;">${p.quote}</div>
        </div>
      </div>
      <div style="font-weight: 700; font-size: 20px; margin-top: 16px;">${p.question}</div>
    `;
        }

        // 判断是前 3 道题还是后 3 道题（使用不同的选项渲染方式）
        if (idx < 3) {
            // 顾客推荐题：展示啤酒图+名称
            options.forEach((opt, i) => {
                opt.style.border = "2px solid #e0c7a7";
                opt.style.borderRadius = "16px";
                opt.style.padding = "16px";
                opt.style.marginBottom = "16px";
                opt.style.cursor = "pointer";
                opt.style.transition = "0.3s";
                opt.style.display = "flex";
                opt.style.alignItems = "center";
                opt.style.gap = "20px";
                opt.style.background = "#fff9f1";

                const label = opt.querySelector(".quiz-multiple-choice-option__label");
                if (label && beers[i]) {
                    label.innerHTML = `
          <div style="display: flex; align-items: center; gap: 16px;">
            <img src="${beers[i].img}" alt="${beers[i].name}" style="width: 30px;">
            <div>
              <div style="font-weight: 600; font-size: 16px;">${beers[i].name}</div>
            </div>
          </div>`;
                }

                opt.addEventListener("mouseover", () => opt.style.backgroundColor = "#fff0dc");
                opt.addEventListener("mouseout", () => opt.style.backgroundColor = "#fff9f1");
            });
        } else {
            // 知识点判断题：展示编号icon+解释
            options.forEach((opt, i) => {
                opt.style.border = "2px solid #e0c7a7";
                opt.style.borderRadius = "16px";
                opt.style.padding = "16px";
                opt.style.marginBottom = "16px";
                opt.style.cursor = "pointer";
                opt.style.transition = "0.3s";
                opt.style.display = "flex";
                opt.style.alignItems = "center";
                opt.style.gap = "20px";
                opt.style.background = "#fefefe";

                const label = opt.querySelector(".quiz-multiple-choice-option__label");
                if (label && beers[i]) {
                    label.innerHTML = `
          <div style="display: flex; align-items: center; gap: 16px;">
            <img src="${beers[i].img}" alt="Icon ${i + 1}" style="width: 24px;">
            <div style="font-size: 14px; color: #333;">${beers[i].name}</div>
          </div>`;
                }

                opt.addEventListener("mouseover", () => opt.style.backgroundColor = "#fff0dc");
                opt.addEventListener("mouseout", () => opt.style.backgroundColor = "#fefefe");
            });
        }

        const btn = block.querySelector(".quiz-card__button");
        if (btn) {
            btn.style.backgroundColor = "#fabd68";
            btn.style.color = "#000";
            btn.style.borderRadius = "24px";
            btn.style.padding = "12px 24px";
            btn.style.fontSize = "16px";
            btn.style.fontWeight = "600";
            btn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
            btn.innerText = idx < 3 ? "Recommend" : "Submit";
        }
    }


    const quizBlocks = blockIds
        .map(id => document.querySelector(`[data-block-id="${id}"]`))
        .filter(Boolean);

    if (quizBlocks.length < 3) return;

    let currentIndex = 0;

    // 初始化样式
    quizBlocks.forEach((block, idx) => {
        block.style.display = idx === currentIndex ? "block" : "none";
        block.style.transition = "all 0.5s";
        styleQuizCard(block, idx);
    });

    // 添加导航按钮
    const navWrap = document.createElement("div");
    navWrap.style.display = "flex";
    navWrap.style.justifyContent = "center";
    navWrap.style.gap = "20px";
    navWrap.style.marginTop = "30px";

    const prevBtn = document.createElement("button");
    const nextBtn = document.createElement("button");

    prevBtn.textContent = "← Back";
    nextBtn.textContent = "Next →";

    [prevBtn, nextBtn].forEach(btn => {
        btn.style.padding = "10px 20px";
        btn.style.border = "none";
        btn.style.borderRadius = "8px";
        btn.style.backgroundColor = "#eee";
        btn.style.cursor = "pointer";
        btn.style.fontWeight = "bold";
    });

    navWrap.appendChild(prevBtn);
    navWrap.appendChild(nextBtn);

    // 插入导航按钮到第一个 block 之后
    quizBlocks[0].parentNode.insertBefore(navWrap, quizBlocks[quizBlocks.length - 1].nextSibling);

    function showSlide(index) {
        quizBlocks.forEach((block, i) => {
            block.style.display = i === index ? "block" : "none";
        });
        styleQuizCard(quizBlocks[index], index);
    }

    prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + quizBlocks.length) % quizBlocks.length;
        showSlide(currentIndex);
    };

    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % quizBlocks.length;
        showSlide(currentIndex);
    };
}