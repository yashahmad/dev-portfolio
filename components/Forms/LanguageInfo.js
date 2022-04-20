export default function LanguageInfo() {
    return (
        <section className="bg-white dark:bg-gray-800 mt-6">
            <div className="max-w-lg mx-auto" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', minHeight: '82vh' }}>
                <div className="mb-6 flex flex-row justify-between">
                    <div>
                        <label for="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Language</label>
                        <input type="text" id="language" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="English" />
                    </div>
                    <div>
                        <label for="fluency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fluency</label>
                        <input type="text" id="fluency" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Native speaker" />
                    </div>
                </div>
            </div>
        </section>
    )
}