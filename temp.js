 

     var a =[21,22,23,25,55,45,22];
     var min ;
     var max ;
     var sum ;
     
     var m={};
     var elements =0 ;

  function insert(x) {//- records a new temperature
        a.push(x);

    } 

   function get_max(){//- returns the highest temp we've seen so far
       if(elements == a.length){
        return max;
         }else{
            all();
            return max
         }
   } 

   function get_min(){ //- returns the lowest temp we've seen so far
    if(elements == a.length){
        return min;
         }else{
            all();
            return min;
         }
   } 

   function get_mean(){ //- returns the mean of all temps we've seen so far
       var mean;
    if(elements == a.length){
        mean = sum/a.length;
        return mean;
         }else{
            all();
            mean = sum/a.length;
            return mean;
         }
   } 

   
   function get_mode(){//- returns a mode of all temps we've seen so far
       var mode;
       var k;
       for(var j=0; j<a.length;j++){
           if(m[a[j]]===undefined)
               m[a[j]]=0;
           m[a[j]]=m[a[j]]+1;
       }
        
       var max_freq=0;
       for(k in m){
           if(m[k]>max_freq){
               max_freq=m[k];
               mode=k;
           }
       }
       return mode;
    }

 function all(){
     min = 151;
     max = -1;
 
      sum =0;
     for(let i=0; i<a.length;i++){
          if(a[i]<min){
              min = a[i];
          }
          if(a[i]>max){
              max = a[i];
          }
          
          
          
          sum +=  a[i];

     }
     elements = a.length;
 }

 
