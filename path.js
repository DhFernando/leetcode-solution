let path = `/nb/dahnb`

// let urls = [
//     '/nb/a',
//     '/a',
//     '/nb/b',
//     '/b',
//     '/nb/c',
//     '/nb/d',
//     '/e'
// ]

// console.log(
//     path.indexOf('/nb')
// )

// const newUrls = []

// urls.forEach(url => {
//     if(url.indexOf('/nb/') != -1){ 
//         console.log(newUrls.indexOf(url.replace('/nb/' , '/')))
//         if(newUrls.indexOf(url.replace('/nb/' , '/')) === -1 ){
//            newUrls.push( url.replace('/nb/' , '/') ) 
//         }
//     }else{
//         if(newUrls.indexOf(url) === -1)
//             newUrls.push(url)
//     }
// }); 

// console.log(newUrls)

let result = {
    data :{
        allMarkdownRemark:{
            edges : [
                {
                    node :{
                        frontmatter : {
                            id:1,
                            path : '/nb/a',
                        }
                    }
                },
                {
                    node :{
                        frontmatter : {
                            id:2,
                            path : '/a',
                        }
                    }
                },
                {
                    node :{
                        frontmatter : {
                            id:3,
                            path : '/nb/b',
                        }
                    }
                },
                {
                    node :{
                        frontmatter : {
                            id:4,
                            path :  '/b',
                        }
                    }
                },
                {
                    node :{
                        frontmatter : {
                            id:5,
                            path : '/nb/c',
                        }
                    }
                },
                {
                    node :{
                        frontmatter : {
                            id:6,
                            path : '/nb/d',
                        }
                    }
                },
                {
                    node :{
                        frontmatter : {
                            id:7,
                            path : '/e'
                        }
                    }
                },
                {
                    node :{
                        frontmatter : {
                            id:8, 
                        }
                    }
                }
            ]
        }
    }
} 

let newEdges = []

result.data.allMarkdownRemark.edges.forEach(({ node } ) =>{  
    if(node.frontmatter.path){
        if(node.frontmatter.path.indexOf('/nb/') != -1 ){
            newEdges.push(
                {
                    node:{
                        ...node,
                        frontmatter:{
                            ...node.frontmatter,
                            path: node.frontmatter.path.replace('/nb/' , '/')
                        }
                    }
                }
            );
    
        }else{
            newEdges.push({node});
        }
    }
}) 
 
const uniq = []

newEdges.forEach(({ node }) =>{  
    let exist = false; 
    for (let i = 0; i < uniq.length; i++) {
        const obj = uniq[i]; 
        if(obj.node.frontmatter.path === node.frontmatter.path){ 
            exist = true
            return
        } 
    }  
    if( !exist ){ uniq.push( {node} ) } 
})

uniq.forEach(({ node }) =>{
    console.log(node.frontmatter.path)
})
  






























































