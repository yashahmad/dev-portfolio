export default function BasicInfo() {
    return (
        <section className="bg-white dark:bg-gray-800 mt-6">
            <div className="max-w-lg mx-auto" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', minHeight: '82vh' }}>
                <form>
                    <div className="mb-6">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required="" />
                    </div>
                    <div className="mb-6">
                        <label for="designation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Label</label>
                        <input type="text" id="designation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Programmer" required="" />
                    </div>
                    <div className="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john@gmail.com" required="" />
                    </div>
                    <div className="mb-6">
                        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
                        <input type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="(912) 555-4321" />
                    </div>
                    <div className="mb-6">
                        <label for="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Url</label>
                        <input type="text" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://johndoe.com" />
                    </div>
                    <div className="mb-6">
                        <label for="summary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Summary</label>
                        <textarea id="summary" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A summary of John Doe..."></textarea>
                    </div>
                    
                    <hr className="mb-6"/>
                    <div className="mb-6 flex flex-row justify-between">
                        <div>
                            <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                            <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2717 Broadway St" />
                        </div>
                        <div>
                            <label for="postalcode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Postal Code</label>
                            <input type="text" id="postalcode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CA 94115" />
                        </div>                                  
                    </div>
                    <div className="mb-6 flex flex-row justify-between">
                        <div>
                            <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
                            <input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="San Francisco" />
                        </div>
                        <div>
                            <label for="countrycode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Country Code</label>
                            <input type="text" id="countrycode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="US" />
                        </div>                                  
                    </div>
                    <div className="mb-6 flex flex-row justify-between">
                        <div>
                            <label for="region" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Region</label>
                            <input type="text" id="region" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="California" />
                        </div>
                    </div>
                    <hr className="mb-6"/>
                    <div className="mb-6 flex flex-row justify-between">
                        <div>
                            <label for="network" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Network</label>
                            <input type="text" id="network" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Twitter" />
                        </div>
                        <div>
                            <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Handle</label>
                            <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe" />
                        </div>                                  
                    </div>
                    <div className="mb-6">
                        <div>
                            <label for="networkurl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Url</label>
                            <input type="text" id="networkurl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://twitter.com/johndoe" />
                        </div>                                  
                    </div>
                    {/* <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label for="remember" className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                    </div> */}
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </section>
    )
}