
// ***** FUNCTION - fetch Love API
var getNamesPercent = function () {

    //variables that convert name inputs to name requi. for API
    var nameOne = $("#your_name").val();
    var nameTwo = $("#their_name").val();
    var name1 = nameOne;
    var name2 = nameTwo;

    fetch("https://love-calculator.p.rapidapi.com/getPercentage?sname=" + name1 + "&fname=" + name2, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "love-calculator.p.rapidapi.com",
            "x-rapidapi-key": apiKey

        }
    })
        .then(function (response) {
            //convert to JSON object
            if (response.ok) {
                // console.log("inside", response)
                return response.json()
                    .then(function (data) {
                        // console.log(data.percentage)
                        var percent = data.percentage
                        console.log(percent)

                        //Append the percent to HTML
                        var container = document.querySelector('#percent-amnt');
                        container.textContent = ''
                        var listItem = document.createElement("h3");
                        listItem.textContent = percent
                        container.appendChild(listItem);

                        if (listItem.textContent <= 40) {
                            setTimeout(function () {
                                window.location.href = 'not-compatible.html'
                            }, 3000)
                        }

                        if (listItem.textContent >= 41) {
                            setTimeout(function () {
                                window.location.href = 'yes-compatible.html'
                            }, 3000)
                        }


                    })
            } else {
                //In case there is an error
                alert(error + "something went wrong. Please try again");
            }
        })
        .catch(function (error) {
            //In case there is an error
            alert(error + " Something went wrong.Please try again.");
        });

}
//********* end function ***********
// getNamesPercent();


//**** FUNCTION - runs getNamesPercent() on button click
function calculatePercent() {
    var calculateBtn = document.getElementById("calculate-btn")
    calculateBtn.addEventListener('click', getNamesPercent)
}
calculatePercent()























// TRYING TO GET INPUTS TOO API NAMES>>>>>>>>>>>> 
// $(document).ready(function () {
//     $("#calculate-btn").click(function () {
//         var nameOne = $("#your_name").val();
//         name1 = nameOne
//     })
// })



// $(document).ready(function () {
//     var name1 = nameOne;
//     var name2 = nameTwo;

//     var nameOne = $("#your_name").val();
//     var nameTwo = $("#their_name").val();

// })
