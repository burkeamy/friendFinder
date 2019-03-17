
const questions = [{
    number: 1,
    question: "How active are you?"
},{
    number: 2,
    question: "Do you like to travel"
}];
const answers = [];


$(document).ready(function(){
do {
    let i = 0;
    $(".questionNum").append("Question " + questions[i].number);
    $(".askQuestion").append(questions[i].question);
    $(".startSurvey").show();
    console.log(questions[i].question)
    i++;
    //let answer = 
    $("option").click(data);
    console.log(data);
    answers.attr("data-value")

} while (i < questions.length);

function survey () {
    for (i = 0; i < questions.length; i++) {
        let answer = (value);
        $(".askQuestion").html(questions[i]);
        //$()
        $(".startSurvey").data(answer);
            console.log(answer);
            //answers.push(value);
   
        console.log(questions);
}

}
//survey();  
})
