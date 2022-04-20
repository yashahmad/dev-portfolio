export default function EducationInfo() {
    return (
        <section className="bg-white dark:bg-gray-800 mt-6">
            <div className="max-w-lg mx-auto" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', minHeight: '82vh' }}>
                <div className="mb-6">
                    <label for="institution" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Institution</label>
                    <input type="text" id="institution" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="University" />
                </div>
                <div className="mb-6">
                    <label for="instituteurl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Url</label>
                    <input type="text" id="instituteurl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://institution.com" />
                </div>
                <div className="mb-6 flex flex-row justify-between">
                    <div>
                        <label for="area" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Area</label>
                        <input type="text" id="area" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Software Development" />
                    </div>
                    <div>
                        <label for="studytype" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Study Type</label>
                        <input type="text" id="studytype" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bachelor" />
                    </div>
                </div>
                <div className="mb-6 flex flex-row justify-between">
                    <div>
                        <label for="startdate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Start Date</label>
                        <input type="text" id="startdate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2011-01-01" />
                    </div>
                    <div>
                        <label for="enddate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">End Date</label>
                        <input type="text" id="enddate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2013-01-01" />
                    </div>
                </div>
                <div className="mb-6">
                    <label for="score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Score</label>
                    <input type="text" id="score" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="4.0" />
                </div>
                <div className="mb-6">
                    <label for="courses" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Courses</label>
                    <textarea id="courses" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Basic SQL, Data Structures"></textarea>
                </div>
            </div>
        </section>
    )
}