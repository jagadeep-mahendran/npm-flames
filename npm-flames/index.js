const getRelation = (name1,name2)=>{
    name1=name1.toLocaleLowerCase();
    name2=name2.toLocaleLowerCase();
    let x= common_letters(name1,name2);
    // console.log(x);
    let relation_char = check_flames(x);
    // console.log(relation_char);
    relation=get_relation(relation_char);
  return relation
}
 function replaceAt(str,index, replacement) {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}
function common_letters(name1,name2){
     
     let m=name1.length;
     let n=name2.length;
    for(let i=0; i<m;i++)
    {
        for(let j=0; j<n;j++)
        {
            if(name1.charAt(i) == name2.charAt(j))
            {
                name1 = replaceAt(name1,i,"0"); // replacing matching characters into "0"
                name2 = replaceAt(name2,j,"0");
            }
        }
    }
    let x1=0,x2=0;
        for(let i=0; i<m;i++)
        {
            if(name1.charAt(i)!='0')
             x1++;
        }
        for(let i=0; i<n;i++)
        {
            if(name2.charAt(i)!='0')
             x2++;
        }
        return x1+x2;
}
function check_flames(x){
    flames="FLAMES";
    flameResult='';
    while(flames.length!=1){
        let index=x%flames.length;
        let temp="";
        if(index!=0){
            flames=flames.substring(index)+flames.substring(0, index-1);
        }
        else{
            flames = flames.substring(0, flames.length-1);
        }
     }
     flameResult=flames.charAt(0);
    return flameResult;
}
function get_relation(relation_char){
    switch(relation_char)
        {
            case 'F':
                 return "Friends";
            case 'L':
                return "Love";
            case 'A':
                return  "Affection";
            case 'M':
                return "Marriage" ;
            case 'E':
                return "Enemies";
            case 'S':
                return "Sibling";
                
        }
}
module.exports = getRelation;