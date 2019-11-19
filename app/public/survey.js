$(document).ready(function(){
    $("#submitBtn").on("click", function () {
        var scores = {
            numbers:[3, 2, 3, 2, 3, 2, 3, 2, 3, 2]
        }
        $.post("/api/friends", scores,
        function(data) {
            console.log("data: " , data)
        })
    })

})