class Formatter {
  //add static methods here
  
  static capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1)
  }
  
  static sanitize(str){
    return str.replace(/[^a-z0-9,' ',-]+/gi, '')
  }
  
  static titleize(str){
    str.replace(/[/\b\w/,a,the,an,but,of,and,for,at,by,from]+/g, l => l.toUpperCase())
  }
}