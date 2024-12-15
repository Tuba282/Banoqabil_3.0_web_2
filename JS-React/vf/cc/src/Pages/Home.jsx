import BG1 from '../assets/bg1.jpg'
import Links from '../components/NavLink/Navlink'

const Home = () => {
    return (
        <>
            <Links />
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5  items-center justify-center flex-col">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 mt-8 object-cover object-center rounded homeimg" alt="hero" src={BG1} />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">CC:Currency Converter</h1>
                        <p className="mb-8 leading-relaxed">This currency converter is a tool that allows you convert the value of one currency into another. It is particularly useful for travelers, investors, and businesses engaged in international transactions. By inputting an amount in a specific currency, you can quickly see its equivalent value in another currency based on current exchange rates.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-[#8071E6] border-0 py-2 px-24 focus:outline-none hover:bg-[#D387E2] rounded text-lg">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
