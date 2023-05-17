/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(value=>{
        if(value.marks>50)
        {
            console.log(value);
        }
        
    });
  }

//   PrintStudentswithMap();
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(value=>{
        console.log(value);
    })
  }

//   PrintStudentsbyForEach();
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",marks:45});
    arr.forEach(value=>{
        console.log(value);
    })

  }

//   addData();
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr.map(value=>{
        if(value.marks<50)
        {
            arr.pop(value);
        }
    });
    console.log(arr);
  }

//   removeFailedStudent();
  
  function concatenateArray() {
    //Write your code here, just console.log
    let myaArr = [
        { id: 5, name: "Abhisek", age: "82", marks: 96 },
        { id: 6, name: "Anurag", age: "56", marks: 100 },
        { id: 7, name: "Rituja", age: "10", marks: 53 },
      ];

      //question not clear wheather I have to concatinate older with first one or not
      //for that reason I also do the task

      let concatArray = arr.concat(myaArr);
      console.log(concatArray);
    
  }

//   concatenateArray();