a=process.argv;require('fs')
  .readdir(a[2],(_,f)=>f.map(f=>~f.indexOf('.'+a[3])&&console.log(f)))
