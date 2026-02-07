/* ================= TIỆN ÍCH ================= */
const $ = (id) => document.getElementById(id);

const show = (id) => {
  const el = $(id);
  if (el) el.style.opacity = 1;
};

const hide = (id) => {
  const el = $(id);
  if (el) el.style.opacity = 0;
};

const hideAllText = () => {
  document.querySelectorAll(".text").forEach(t => {
    t.style.opacity = 0;
  });
};

/* ================= KHỞI TẠO ================= */
hideAllText();
setTimeout(() => show("text0"), 800);

/* ================= CLICK BƯỚM ================= */
$("butterfly").onclick = () => {

  // BƯỚM BAY
  hide("text0");
  $("butterfly").style.top = "-35%";
  $("butterfly").style.opacity = 0;

  /* ===== TIMELINE TEXT ===== */
  const texts = [
    "text1", "text2", "text3", "text4", "text5", "text6",
    "text7", "text10", "text11", "text12", "text13", "text14"
  ];

  let t = 1500;
  texts.forEach(id => {
    setTimeout(() => {
      hideAllText();
      show(id);
    }, t);
    t += 2000;
  });

  /* ===== TIMELINE ẢNH ===== */
  setTimeout(() => show("imgT"), 1500);
  setTimeout(() => hide("imgT"), 3500);

  setTimeout(() => show("imgH"), 3500);
  setTimeout(() => hide("imgH"), 6500);

  setTimeout(() => show("imgT1"), 6500);
  setTimeout(() => show("imgT2"), 7000);

  setTimeout(() => show("imgQ"), 9000);
  setTimeout(() => hide("imgQ"), 11500);

  setTimeout(() => show("imgN"), 11500);
  setTimeout(() => hide("imgN"), 14000);

  setTimeout(() => show("imgH1"), 15000);
  setTimeout(() => show("imgH2"), 17500);

  /* ===== HIỆU ỨNG ===== */
  startGalaxy();
  setTimeout(startHearts, 14000);
};
