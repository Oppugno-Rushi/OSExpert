document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".copy").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const id = btn.getAttribute("data-target");
    const el = document.getElementById(id);
    if (!el) return;
    const txt = el.textContent;

    try{
      await navigator.clipboard.writeText(txt);
      const old = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(()=>btn.textContent=old, 1200);
    }catch(e){
      const range = document.createRange();
      range.selectNodeContents(el);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      const old = btn.textContent;
      btn.textContent = "Select & Copy";
      setTimeout(()=>btn.textContent=old, 1200);
    }
  });
});
