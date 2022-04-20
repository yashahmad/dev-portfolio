export default function WorkInfo() {
    return (
        <section className="bg-white dark:bg-gray-800 mt-6">
            <div className="max-w-lg mx-auto" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', minHeight: '82vh' }}>
                <div className="mb-6 flex flex-row justify-between">
                    <div>
                        <label for="companyname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input type="text" id="companyname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Company" />
                    </div>
                    <div>
                        <label for="positio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Position</label>
                        <input type="text" id="position" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="President" />
                    </div>
                </div>
                <div className="mb-6">
                    <label for="companyurl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Url</label>
                    <input type="text" id="companyurl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://company.com" />
                </div>
                <div className="mb-6 flex flex-row justify-between">
                    <div>
                        <label for="startdate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Start Date</label>
                        <input type="text" id="startdate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2013-01-01" />
                    </div>
                    <div>
                        <label for="enddate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">End Date</label>
                        <input type="text" id="enddate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2014-01-01" />
                    </div>
                </div>
                <div className="mb-6">
                    <label for="summary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Summary</label>
                    <textarea id="summary" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description..."></textarea>
                </div>
            </div>
        </section>
    )
}