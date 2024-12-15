// import React from 'react'
import BG1 from '../assets/bg1.jpg';
import Links from '../components/NavLink/Navlink';




var select = document.querySelectorAll(".currency");
let input_currency = document.getElementById("input_currency");
let output_currency = document.getElementById("output_currency");

fetch(`https://api.frankfurter.app/currencies`)
    .then((data) => data.json())
    .then((data) => {
        const entries = Object.entries(data);
        console.log(data);
        for (var i = 0; i < entries.length; i++) {
            select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
            select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        }
    });

const convert = () => {
    let input_currency_val = input_currency.value;
    console.log(input_currency_val);
    if (select[0].value != select[1].value) {
        alert("going to convert");
        const host = "api.frankfurter.app";
        fetch(
            `https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`
        )
            .then((val) => val.json())
            .then((val) => {
                output_currency.value = Object.values(val.rates)[0];
                console.log(Object.values(val.rates)[0]);
            });
    }
    else {
        alert("Peease select two different currencies");
    }
}




function Process() {

    return (
        <div>
            <Links />
            <div className="mainDiv ">
                <section className="text-gray-600 body-font h-full w-full">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="container">
                            <div className="lg:max-w-lg lg:w-full md:w-2/2  w-5/6"><h1 className="ml-8 text-center mb-24 sm:text-6xl text-3xl">Currency Converter</h1>

                                {/* input fields */}
                                <div className="h-24 sm:my-2 my-0 row flex flex-wrap sm:ml-0  -ml-24  justify-center mt-5 ">
                                    <div className="col  font-bold ml-24 justify-center">
                                        <select className="currency h-8 appearance-none w-24 sm:mt-0 mt-2  ml-12 rounded text-white text-center bg-[#8071e6]">
                                            <option className='bg-[#8071e6] '>Select</option>
                                        </select>
                                        <input type="text" className="bg-slate-200 h-8 w-48 sm:mt-0 mt-2 rounded ml-2" id="input_currency" name="" />
                                    </div>
                                    <div className="col font-bold ml-24 justify-center">
                                        <select className="currency h-8 appearance-none w-24   sm:mt-0 mt-2  ml-12 rounded text-white text-center bg-[#8071e6]">
                                            <option className='bg-[#8071e6] '>Select</option>
                                        </select>
                                        <input type="text" className="bg-slate-200 h-8 w-48   sm:mt-0 mt-2 rounded ml-2" id="output_currency" name="" />
                                    </div>
                                </div>
                                {/* input fields */}
                                <div className="text-center flex items-center justify-center h-10 font-bold sm:mt-0 mt-24">
                                    <button onClick={convert} className="h-10 w-48 rounded ml-8  text-white bg-[#d387e2]"  >Convert</button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                            <img className="object-cover object-center rounded" alt="hero" src={BG1}></img>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}









export default Process
