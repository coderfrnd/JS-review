import people from './people.js'

function profession(data){
        // let answer = data.reduce((acc,ele)=>{
        //           if(acc[ele.profession]){
        //             acc[ele.profession].push(ele.name)
        //           }
        //           else{
        //             acc[ele.profession]=[]
        //             acc[ele.profession].push(ele.name)
        //           }
        //           return acc
        // },{})
        // // console.log(answer);
        // return answer
let answer ={}
        for(let i=0; i<data.length;i++){
               if(answer[data[i].profession]){
                answer[data[i].profession].push(data[i].name)
               }
               else{
                answer[data[i].profession] = []
                answer[data[i].profession].push(data[i].name)
               }
        }
        console.log(answer)
        
}
 profession(people)
// console.log(answer);

