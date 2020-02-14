class Formatter {
  //add static methods here
  
  static capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1)
  }
  
  static sanitize(str){
    return str.replace(/[^a-z0-9,' ',-]+/gi, '')
  }
  
  static titleize(str){
    let strArr= str.split(' ')
    let noC=['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for(let i=1;i<strArr.length;i++){
      if(!noC.includes(i)) {i=Formatter.capitalize(i)}
    }
    return strArr.join(' ')
  }
}