import frameworkData from "./framework.json";

export default function FrameworkList(){
    return (
        <div className="p-8">
            <FrameworkListSearchFilter/>
            {frameworkData.map((item) => (
                <div className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-600">Develop by <strong>{item.details.developer}</strong> ({item.details.releaseYear})</p>
                    <a href={item.details.officialWebsite} className="text-blue-600 underline">View Website</a>
                    <p>
                        {item.tags.map((tag,index)=>(
                            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                                {tag}
                        </span>
                        ))}
                    </p>
                </div>
            ))}
            
        </div>
    )
}

function FrameworkListSearchFilter(){
    return(
        <div>
           <input
                type="text"
                name="searchTerm"
                placeholder="Search framework..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />

            <select
                name="selectedTag"
                className="w-full p-2 border border-gray-300 rounded mb-4"
            >
                <option value="">All Tags</option>
            </select> 
        </div>
    )
}