var loops=({"Name":"rohit",
         "age":"24",
         "email":"rohit@gmail.com",
         "salary":"Rs.15,000",
         "designation":"accountant"},
         
         {"Name":"mohan",
         "age":"23",
         "email":"mohan12@gmail.com",
         "salary":"Rs.23,000",
         "designation":"developer"},
         
         {"Name":"kishore",
         "age":"28",
         "email":"kishore@gmail.com",
         "salary":"Rs.32,000",
         "designation":"tester"});


//for loop   
for(i=0;i<loops.length;i++){
   console.log(loops[i]);          
};

//for in loop

for( const x in loops){
    console.log(loops[x]);
};       

//for of loop

for(let a of loops){
    console.log(a);
};

//for Each loop
loops.forEach(function()
{
    console.log(loops[0]);
});