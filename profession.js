import people from './people.js'

function profession(data){
        let answer = data.reduce((acc,ele)=>{
                  if(acc[ele.profession]){
                    acc[ele.profession].push(ele.name)
                  }
                  else{
                    acc[ele.profession]=[]
                    acc[ele.profession].push(ele.name)
                  }
                  return acc
        },{})
        // console.log(answer);
        return answer

        // for(let i=0;)
        
}

let answer = profession(people)
console.log(answer);

