const {organisation} = require("./organisation.json")

// let diff = JSON.stringify(organisation,null,3)

let division = organisation.divisions


function exceeding(data){
    let ans = [];
    data.reduce((acc,ele)=>{
        let department = ele.departments
         department.reduce((secondacc,ele)=>{
            let employee = ele.employees
            employee.reduce((acc,ele)=>{
                let project = ele.projects
                  if(project.budget>150000){
                    
                    
                  }
                  
              
                 
                 
            })
         },)
    },0)
    console.log( ans);
    
}

exceeding(division)





