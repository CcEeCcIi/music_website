document.addEventListener("DOMContentLoaded", bindButtons);

function bindButtons(){

    document.getElementById("submit").addEventListener("click", function(event){
        var req = new XMLHttpRequest();
        var name = document.getElementById("name").value;
        var input = document.getElementById("right_answer").checked;
        req.open("POST", "http://httpbin.org/post", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.addEventListener("load", function(){
            console.log("ok")
            var response = JSON.parse(req.responseText);
            if (input === true && req.status == 200) {
                document.getElementById("result").textContent = "Hi, " + name + ". Congratulations! You answer is correct!";
            } else {
                document.getElementById("result").textContent = "Hi, " + name + ". Not bad. Please try again.";
            }
        })
        var form_content = {}
        form_content["name"] = document.getElementById("name").value;
        form_content["answer"] = document.getElementById("right_answer").checked;
        req.send(JSON.stringify(form_content));
        event.preventDefault();

    })

}

