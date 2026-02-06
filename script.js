const $ = id => document.getElementById(id);
const show = id => $(id).style.opacity = 1;
const hide = id => $(id).style.opacity = 0;

const butterfly = $("butterfly");

/* ẨN TẤT CẢ TEXT BAN ĐẦU */
[
  "text0","text1","text2","text3","text4","text5","text6",
  "text7","text10","text11","text12","text13","text14"
].forEach(hide);

/* GỢI Ý BAN ĐẦU */
setTimeout(()=>show("text0"),1000);

/* CLICK BƯỚM */
butterfly.addEventListener("click", () => {

  /* BƯỚM BAY */
  butterfly.style.top = "-30%";
  butterfly.style.opacity = 0;

  /* ẢNH ÁO XANH */
  show("imgT");
  setTimeout(()=>hide("imgT"),2000);

  /* TEXT CHÍNH */
  let t = 2000;
  ["text1","text2","text3","text4","text5","text6"].forEach(id=>{
    setTimeout(()=>show(id),t);
    setTimeout(()=>hide(id),t+1800);
    t+=2000;
  });

  /* ÁO ĐEN */
  setTimeout(()=>{
    show("text2");
    show("imgH");
  },6000);

  setTimeout(()=>hide("imgH"),9000);

  /* CÔNG VIỆC */
  setTimeout(()=>show("imgT1"),10000);
  setTimeout(()=>show("imgT2"),10500);
  setTimeout(()=>show("imgQ"),12500);

  /* KHÓC */
  setTimeout(()=>{
    show("text7");
    show("imgN");
  },15000);

  setTimeout(()=>{
    hide("imgN");
    hide("text7");
  },17500);

  /* TRÁI TIM + ĐỘNG VIÊN */
  setTimeout(()=>{
    startGalaxy();
    startHearts();
    show("text10");
    show("imgH1");
  },18000);

  setTimeout(()=>{
    hide("imgH1");
    show("text11");
    show("imgH2");
  },21000);

  setTimeout(()=>show("text12"),23000);
  setTimeout(()=>show("text13"),24500);
  setTimeout(()=>show("text14"),27000);
});
