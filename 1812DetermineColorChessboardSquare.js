const coordinates = "a1"
    const charCodeOfA = ('a'.charCodeAt())-1;
    
    const x = coordinates[0].charCodeAt() - charCodeOfA,
          y = coordinates[1];
    
    if(x%2 == 0) {
        if(y%2==0) {
          console.log( false );  
        }
        console.log( true );
    }else {
        if(y%2==0) {
          console.log( true ) ; 
        }
        console.log( false );  
    }
 
