document.getElementById('color-change').addEventListener('click',function(){
  const color = document.getElementsByClassName('friends');
  for (const colors of color){
    colors.style.backgroundColor = 'cyan';
  }
})

document.getElementById('center-3rd').addEventListener('click',function(){
  const center =document.getElementById('friend-3');
  center.style.textAlign = "center";
})

document.getElementById('add-friend').addEventListener('click',function(){
  const add = document.getElementById('friends');
  const friend = document.createElement('div');
  friend.classList.add('friend')
  friend.innerHTML = `
  <h3 class="friend"> hello Friend-{$} </h3>
  <p> helojcisjfowiefjwe </p>
  `
  add.appendChild(friend);
})