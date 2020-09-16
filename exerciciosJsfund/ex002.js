function classificaTriangulo(l1, l2, l3){
  if(l1 == l2 && l2 == l3){
    return 'Equilátero'
  }else if(l1 == l2 || l2 == l3 || l1 == l3){
    return 'Isósceles'
  }else{
    return 'Escaleno'
  }
}

console.log(classificaTriangulo(1,1,1))
console.log(classificaTriangulo(1,1,2))
console.log(classificaTriangulo(1,2,3))