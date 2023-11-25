//Question 1 : For the given JSON Iterate over all for loops(for, for in, for of, forEach)

var request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open("GET", "Day5_Q2_myResume.json");
request.send();
// console.log(request);
request.onload = function(){
    var result = JSON.parse(request.response);
    // console.log(result);

    //for loop
    for(let i=0;i<result.length;i++){
       console.log(result[i]);
    }

    //for in loop and for of loop
    for(let key in result[0]){
        console.log(result[0][key].name);
        for(let a of result){
            if(a == result[0]){
                console.log(a[key].Designation);
            }
            
        }
    }

    //forEach loop
    result.forEach(myFunction);

    function myFunction(item, index){
        // console.log(item, index);
        if(index == 6){
            console.log(result[index].Language_Known
            );
        }
    }


}
