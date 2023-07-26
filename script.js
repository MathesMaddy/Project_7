sum=0;
stri="";
function fun_add(){
        data=document.getElementById("in1").value;
    sum+=parseInt(data);
    if(stri.length==0){
        stri+=data;
    }else{
        stri+=("+"+data);
    }
    document.getElementById("para1").innerHTML=sum;        
}
function fun_sub(){
    data=document.getElementById("in1").value;
    sum-=parseInt(data);    
    if(stri.length==0){
        stri+=data;
    }else{
        stri+=("+"+data);
    }
    document.getElementById("para1").innerHTML=sum;    
}
function fun_mul(){
    data=document.getElementById("in1").value;
    sum*=parseInt(data);    
    if(stri.length==0){
        stri+=data;
    }else{
        stri+=("+"+data);
    }
    document.getElementById("para1").innerHTML=sum;    
}
function fun_div(){
    data=document.getElementById("in1").value;
    sum/=parseInt(data);    
    if(stri.length==0){
        stri+=data;
    }else{
        stri+=("+"+data);
    }
    document.getElementById("para1").innerHTML=sum;    
}
function fun_ans(){
    document.getElementById("para2").innerHTML=stri;
}
