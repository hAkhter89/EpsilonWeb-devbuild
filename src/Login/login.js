const form = document.getElementById("form")

function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const id = document.getElementById("id").value
    const pass = document.getElementById("password").value
    
    
    $.post("http://epsilon.move.pk/query.php",
        {
            query: "login",
            regId: id,
            password: pass,
            stayLoggedIn: false
        }, function(data, status){
            data = JSON.parse(data);
            console.log(data);
            if (data != true) {
                window.localStorage.setItem("hash", data)
                window.location.href = 'http://127.0.0.1:5500/public/Portal/index.html'
            }
        } 
    );
})
