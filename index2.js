// ### Phase 1: Ask 1 question only then exit
//
// #### Create a Class to represent an individual Question (4 points).
// Your Question class should have 3 properties:
//     * Question Text - This is the actual text of the given question
// * Answers - This should be an array containing the available answers for the question.
// The number of answers available for a given question is up to the Developer.
// * Correct Answer Index - This integer should be the index of the correct answer in your answer array.
//
//     Your Question Class should have at least 2 methods:
//     * A method to output the question and the available answers.
// * A method that accepts an integer, and checks if the value matches the ```Correct Answer Index```.

class Question
{
    constructor(question,answers,correctIndex)
    {

        this.question_p = question;
        this.answers_p = answers;
        this.correctIndex_p = correctIndex;

    }
    printQuestion ( ) // creating a method to print out the question and the possible answers
    {

        console.log(this.question_p );


this.answers_p.forEach
(

    function(element, e2=1)
        {


            console.log (e2 + " : " + element);
            e2++

        }
);


    }


    correctAns(indexCheck)
    {
        if (this.correctIndex_p === indexCheck)
        {
            alert("Good Job Right Answer!!");

        }

       else
        {
            alert("Sorry Wrong Answer!!");
        }
    }

}

let q1 = new Question("What is the size of pants",[10,12,14],2);
let q2 = new Question("What is the size of shirt",[10,12,14],1);
let q3 = new Question("What is the size of shoes",[7,6,8],0);

available_question_list_array=[];
available_question_list_array.push(q1);
available_question_list_array.push(q2);
available_question_list_array.push(q3);

//console.log(available_question_list_array); // checking to see if the list of question populated in an array

//Each answer should have a number displayed that the User can enter to pick an answer
// (using the Question class method you implemented) (2 points).
// Refer to image. (HINT: Use 0 - however many answers and use a ```Template String```
// or simply concatenate the corresponding answer (+) to make a numbered answer in the console).

let index_of_a_question = Math.floor(Math.random() * available_question_list_array.length);

available_question_list_array[index_of_a_question].printQuestion();

// #### Prompt the User to enter the number of what they think the correct answer is (1 point).
// The user should input the corresponding number of the correct answer displayed in the JavaScript console.

let userInput = new Question( parseInt (prompt("Enter Your Correct Choice '0','1' or '2' ")));
available_question_list_array[index_of_a_question].correctAns(userInput);