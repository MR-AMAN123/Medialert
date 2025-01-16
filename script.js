
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

//for sign-up
function validateEmail(email) {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email); 
}

function saveData(){
    let name, email, password;
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;

    if (!validateEmail(email)) {
      alert("Please enter a valid email address!");
      return;
  }
    
     let user_records=new Array();
     user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
     if(user_records.some((v)=>{
        return v.email==email
     })){
        alert("Duplicate Data");
     }
     else{
        user_records.push({
            "name":name,
            "email":email,
            "password":password
        })
        localStorage.setItem("users",JSON.stringify(user_records))
        alert("Account created successfully!");
     }
     
}

//for login
function validateEmail(email) {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
}
function saveLogin(){
    let  email, password;
    email=document.getElementById("Email").value;
    password=document.getElementById("Password").value;

    if (!validateEmail(email)) {
      alert("Please enter a valid email address!");
      return;
  }

     
  let user_records = JSON.parse(localStorage.getItem("users")) || [];
       if (user_records.some((v) => v.email === email && v.password === password)) {
        alert("Login Successfull");
        let current_user=user_records.filter((v)=> v.email==email && v.password==password  )[0]
            
      

        localStorage.setItem("name",current_user.name);
        localStorage.setItem("email",current_user.email);
        window.location.href="home.html";
     }
     else{
        alert("Login Fail")
     }

}