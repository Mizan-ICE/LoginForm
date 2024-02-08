
document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if(username.trim() ==='' || password.trim() === ''){
      alert("Fill up both username and password");
    }else{
      alert(`Welcome,${username}`);
    }
});