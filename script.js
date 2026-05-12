function copyInvite(){
  const text=document.getElementById('inviteLink').innerText;
  navigator.clipboard.writeText(text).then(()=>{
    document.getElementById('copyMsg').innerText='초대 링크가 복사되었습니다.';
  }).catch(()=>{
    document.getElementById('copyMsg').innerText='복사가 안 되면 링크를 길게 눌러 직접 복사해주세요.';
  });
}
