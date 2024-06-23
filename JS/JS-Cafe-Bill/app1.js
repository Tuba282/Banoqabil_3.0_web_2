// function total(){
//   let latte = document.getElementById("lat_in");
//   let mocha = document.getElementById("moc_in");
//   let capa = document.getElementById("cap_in");
//   let expres = document.getElementById("exp_in");

//   const get_latte = parseInt(latte.value);
//   const get_mocha = parseInt(mocha.value);
//   const get_capa = parseInt(capa.value);
//   const get_expres = parseInt(expres.value);

//   let rs_latte = 180;
//   let rs_mocha = 150;
//   let rs_capa = 100;
//   let rs_expres = 120;

//   const Total =
//   get_latte * rs_latte + get_mocha * rs_mocha + get_capa * rs_capa + get_expres * rs_expres;

//   document.getElementById("pora_total").innerHTML = `${Total}`;
// };

// // document.querySelector("button").addEventListener("click", total);


// const total= ()=>{
//     let latte = document.getElementById("lat_in").value;
//     let mocha = document.getElementById("moc_in").value;
//     let capa = document.getElementById("cap_in").value;
//     let expres = document.getElementById("exp_in").value;

//     let rs_latte = 180;
//     let rs_mocha = 150;
//     let rs_capa = 100;
//     let rs_expres = 120;
  
//     const Total = latte * rs_latte + mocha * rs_mocha + capa * rs_capa + expres * rs_expres;
  
//     document.getElementById("pora_total").innerHTML = `Your Total: ${Total}`;
//   };
  
//   document.querySelector("check_total").addEventListener("click", total);


const total = () => {

  const latte   = document.querySelector('input[name="lat_in"]').value;
  const mocha = document.querySelector('input[name="moc_in"]').value;
  const capa   = document.querySelector('input[name="cap_in"]').value;
  const expres   = document.querySelector('input[name="exp_in"]').value;
 
  let rs_latte = 180;
    let rs_mocha = 150;
    let rs_capa = 100;
    let rs_expres = 120;
 
 const Total = latte   *  rs_latte   +
 mocha *  rs_mocha +  
 capa   *  rs_capa   +
 expres   *  rs_expres;
 
  document.querySelector("#pora_total").innerHTML = Total;
 
}; 
document.querySelector("button").addEventListener("click", total);