 function abrir(){

       let list=document.getElementById('div_auxiliar'); 
       if(list.style.display==='none'|| list.style.display===''){
        list.style.display='block';
       }
       else{
        list.style.display='none';
       }
    }
    function div(){
      let div = document.getElementById('dark')
      if(div.style.display===" "||div.style.display==="none"){
      div.style.display="block"
      }
      else{
        div.style.display="none"
      }
    }
    function night(){
      let i = document.getElementById('i')
      let bibi =document.getElementById('bibi')
      let bi = document.getElementById('bi')
      let main = document.getElementById('main')
      let body = document.getElementById('body')
        body.style.background="#000"
        main.style.color="#fff"
        bi.style.display="none"
        bibi.style.display="block"
        i.style.background="#000"
    }
    function day(){
      let i = document.getElementById('i')
      let bibi =document.getElementById('bibi')

      let bi = document.getElementById('bi')

      let main = document.getElementById('main')
      let body = document.getElementById('body')
        body.style.background="#fff"
        main.style.color="#000"
        bi.style.display="block"
        bibi.style.display="none"
        i.style.background="#fff"
}