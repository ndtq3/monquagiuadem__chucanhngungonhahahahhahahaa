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
setTimeout(() => show("text0"), 800); // “Chạm vào để bướm bay”

/* ================= CLICK BƯỚM ================= */
$("butterfly").addEventListener("click", () => {

  /* BƯỚM BAY */
  hide("text0");
  $("butterfly").style.top = "-35%";
  $("butterfly").style.opacity = 0;

  /* ===== TIMELINE TEXT (CHỮ SAU → CHỮ TRƯỚC MẤT) ===== */
  const textTimeline = [
    "text1",
    "text2",
    "text3",
    "text4",
    "text5",
    "text6",
    "text7",
    "text10",
    "text11",
    "text12",
    "text13",
    "text14"
  ];

  let time = 1500;

  textTimeline.forEach(id => {
    setTimeout(() => {
      hideAllText();
      show(id);
    }, time);
    time += 2000;
  });

  /* ===== TIMELINE ẢNH ===== */

  // Bạn áo xanh (to mờ rồi mất)
  setTimeout(() => show("imgT"), 1500);
  setTimeout(() => hide("imgT"), 3500);

  // Bạn áo đen (đi cùng text2)
  setTimeout(() => show("imgH"), 3500);
  setTimeout(() => hide("imgH"), 6500);

  // Công việc 2–3 (lệch 0.5s)
  setTimeout(() => show("imgT1"), 6500);
  setTimeout(() => show("imgT2"), 7000);

  // Bạn lè lưỡi
  setTimeout(() => show("imgQ"), 9000);
  setTimeout(() => hide("imgQ"), 11500);

  // “thôi đừng khóc”
  setTimeout(() => show("imgN"), 11500);
  setTimeout(() => hide("imgN"), 14000);

  // Động viên cuối
  setTimeout(() => show("imgH1"), 15000);
  setTimeout(() => hide("imgH1"), 18000);

  setTimeout(() => show("imgH2"), 18000);
  setTimeout(() => hide("imgH2"), 20000);

  /* ===== HIỆU ỨNG ===== */
  startGalaxy();
  setTimeout(startHearts, 14000);
});
