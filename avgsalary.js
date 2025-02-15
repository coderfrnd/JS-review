import people from './people.js'

function avgsalary(data){
    let answer = data.reduce((acc,ele)=>{
        if(acc[ele.profession]){
            acc[ele.profession]["salary"]+=ele.salary
            acc[ele.profession]["people"]++;

        }
        else{
            acc[ele.profession] = {
                "salary":ele.salary,
                "people":1
            }
        }
        return acc
    },{})
    
    return answer
}

function convert(data){
    
    // for(let key in data){
    //   let avg = data[key].salary/data[key].people
    //     avg =avg.toFixed(2)
    //     data[key] = parseInt(avg)   
    // }
    // console.log(data);
    
    // return data
 
   

}

convert(avgsalary(people))

