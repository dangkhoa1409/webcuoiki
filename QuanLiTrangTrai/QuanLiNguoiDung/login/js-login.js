var HOST = "https://627dc59db75a25d3f3ab7c94.mockapi.io"
var USER = "user"

$.ajax({
    url: "https://627dc59db75a25d3f3ab7c94.mockapi.io/user",
    type: "GET",
    datatype: "json",
    success:function(data){
        // localStorage.setItem('user',JSON.stringify(data))
        console.log(data)
        for(let i = 0; i < data.length; i++){
            console.log(data[i].username)
            $("#btn-login").click(function(){
                let username = $("#user").val()
                let pass = $("#pass").val()
                if(username == data[i].username && pass == data[i].password){
                    alert("Dang nhap thanh cong")
                    let login = $(".lgin");
                    login.attr("href","../test.html")
                }
                else{
                    alert("Dang nhap that bai")
                }
            })
        }
        
    }
})
function checkpass(){
    var mk = document.getElementById("pass");
    mk.type = (mk.type === "password")? "text":"password";
}
