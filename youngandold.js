import people from './people.js'

function youngandold(data){

    let answer = data.reduce((acc,ele)=>{
        if(acc[ele.profession]){
            if(acc[ele.profession]["young"] > ele.age){
                acc[ele.profession]["young"] = ele.age
            }
            else if(acc[ele.profession]["old"] < ele.age){
                acc[ele.profession]["old"] = ele.age
            }
        }
        else{
            acc[ele.profession] = {
                "old" : ele.age,
                "young":ele.age
            }
        }
        return acc
    },{})
    console.log(answer);
    

}
youngandold(people)