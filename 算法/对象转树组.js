const value = {
    a:1,
    b:{
        c:1
    }
}


const obj2arr =(object)=>{
    const ans=[];

    function dfs(obj,current){
        if(typeof obj === 'object'){
            for(const [key,value] of Object.entries(obj)){
                dfs(value,current===""?key:current+"."+key)
            }
        }else{
            ans.push([current,obj])
        }
    }
    dfs(object,'')

    return ans;
}

console.log(obj2arr(value))