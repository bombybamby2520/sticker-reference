// Render Cards
const grid = document.getElementById("grid");

stickers.forEach((s) => {
  const refPrompt = [
    "ปรับท่าทางและสีหน้าตามรูปที่ 2",
    "- ให้คงขนาดรูปร่าง ความสูง,ความอ้วน,ทรงผม และเสื้อผ้าเหมือนรูปที่ 1",
    "- ฉากหลังสีขาวล้วน",
    "",
    s.prompt,
  ].join("\n");

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img
      class="sticker-image"
      src="${s.image}"
      alt="${s.title}"
    >

    <div class="title">
      ${s.number}. ${s.title}
    </div>

    <button class="copy-ref">
      📋 Copy Prompt
    </button>
  `;

  const copyButton = card.querySelector(".copy-ref");

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(refPrompt);

      const oldText = copyButton.innerHTML;
      copyButton.innerHTML = "✅ Copied!";

      setTimeout(() => {
        copyButton.innerHTML = oldText;
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  });

  grid.appendChild(card);
});
