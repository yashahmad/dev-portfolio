export default function ProjectsInfo() {
    return (
        <section className="bg-white dark:bg-gray-800 mt-6">
            <div className="max-w-lg mx-auto" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', minHeight: '82vh' }}>
                <div className="mb-6">
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Project" />
                </div>
                <div className="mb-6">
                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
                    <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description..."></textarea>
                </div>
                <div className="mb-6">
                    <label for="keywords" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Keywords</label>
                    <input type="text" id="keywords" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="HTML, CSS, Reactjs" />
                </div>
                <div className="mb-6 flex flex-row justify-between">
                    <div>
                        <label for="startdate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Start Date</label>
                        <input type="text" id="startdate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2019-01-01" />
                    </div>
                    <div>
                        <label for="enddate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">End Date</label>
                        <input type="text" id="enddate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2021-01-01" />
                    </div>
                </div>
                <div className="mb-6">
                    <label for="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Url</label>
                    <input type="text" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://project.com" />
                </div>
                <div className="mb-6 flex flex-row justify-between">
                    <div>
                        <label for="entity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Entity</label>
                        <input type="text" id="entity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entity" />
                    </div>
                    <div>
                        <label for="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type</label>
                        <input type="text" id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="application" />
                    </div>
                </div>
            </div>
        </section>
    )
}