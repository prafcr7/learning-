 let score = prompt("enter yo0ur score (0-100)");
 let grade;

 if(score >= 90 && score <= 99){
     grade = "A";
 }else if (score >= 70 && score <= 89){
     grade = "B";
 }else if (score >= 60 && score <= 69){
     grade = "C";
 }else if (score >= 50 && score <= 59){
     grade = "D"
 }
 console.log("acording to your score ",grade);
