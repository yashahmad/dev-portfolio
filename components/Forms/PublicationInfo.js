export default function PublicationInfo() {
    return (
        <section className="bg-white dark:bg-gray-800 mt-6">
            <div className="max-w-lg mx-auto" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', minHeight: '82vh' }}>
                <div className="mb-6">
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Publication" />
                </div>
                <div className="mb-6 flex flex-row justify-between">
                    <div>
                        <label for="publisher" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Publisher</label>
                        <input type="text" id="publisher" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Company" />
                    </div>
                    <div>
                        <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Release Date</label>
                        <input type="text" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2014-10-01" />
                    </div>
                </div>
                <div className="mb-6">
                    <label for="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Url</label>
                    <input type="text" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://publication.com" />
                </div>
                <div className="mb-6">
                    <label for="summary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Summary</label>
                    <textarea id="summary" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description ..."></textarea>
                </div>
            </div>
        </section>
    )
}