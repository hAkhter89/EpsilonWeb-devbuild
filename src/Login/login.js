
const form = document.getElementById("form")

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const id = document.getElementById("id").value
    const pass = document.getElementById("password").value


    $.post("http://epsilon.move.pk/query.php",
                {
                    query: "login",
                    regId: id,
                    password: pass
                }, function(data, status){
                    console.log(data);
                }
            );
})