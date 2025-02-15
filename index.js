import people from './people.js'

function engineerAge(data){
    let answer = data.reduce((acc,ele)=>{
        if(ele.age>30 && ele.profession == "Engineer"){
            acc.push(ele.name)
        }
        return acc
    },[])
return answer
}



 
 