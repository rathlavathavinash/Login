function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="190422" && password=="Avinash@143")
    {
        alert("login succesfully");
        return false;
    }
    else
    {
        alert("login failed");
    }

}