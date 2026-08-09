const langBtn=document.getElementById('langBtn');
const backLink=document.getElementById('backLink');
function setLanguage(language){
  const chinese=language==='zh-CN';
  document.documentElement.lang=chinese?'zh-CN':'en';
  langBtn.textContent=chinese?'EN':'中';
  langBtn.title=chinese?'Switch to English':'切换至中文';
  backLink.textContent=chinese?'← 返回研究札记':'← Back to Research Notes';
  document.title=(chinese?document.body.dataset.titleZh:document.body.dataset.titleEn)+' · LiPei Research';
  localStorage.setItem('siteLanguage',chinese?'zh-CN':'en');
}
setLanguage(localStorage.getItem('siteLanguage')==='zh-CN'?'zh-CN':'en');
langBtn.addEventListener('click',()=>setLanguage(document.documentElement.lang==='zh-CN'?'en':'zh-CN'));
backLink.addEventListener('click',event=>{
  try{
    sessionStorage.setItem('lipeiReturningFromNote','1');
    if(document.referrer&&new URL(document.referrer).origin===location.origin&&history.length>1){
      event.preventDefault();history.back();
    }
  }catch(error){}
});
