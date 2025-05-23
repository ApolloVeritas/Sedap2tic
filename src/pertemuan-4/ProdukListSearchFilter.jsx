import frameworkData from "./produk.json";
import { useState } from "react";
export default function ProductList(){
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
    const _searchTerm = searchTerm.toLowerCase();
    const filteredFrameworks = frameworkData.filter((framework) => {
      const matchesSearch =
        framework.title
                  .toLowerCase()
                  .includes(_searchTerm) ||
        framework.description
                  .toLowerCase()
                  .includes(_searchTerm);
  
      const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;
  
      return matchesSearch && matchesTag;
    });
    const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
      ];
    return (
        <div className="p-8">
            <div>
           <input
                type="text"
                name="searchTerm"
                placeholder="Search framework..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={(e => setSearchTerm(e.target.value))}
            />

            <select
                name="selectedTag"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={(e =>setSelectedTag(e.target.value))}
            >
                <option value="">All Tags</option>
                    {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                    {tag}
                </option>
  ))}
            </select> 
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {filteredFrameworks.map((item) => (
                <div className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
                    <p className="text-gray-800"><strong>Brand : </strong>{item.brand}</p>
                    <p className="text-gray-800"><strong>Kategori : </strong>{item.category}</p>
                    <p className="text-gray-800"><strong>Dekripsi : </strong>{item.description}</p>
                    <p className="text-gray-800"><strong>Rating : </strong>{item.rating}★</p>
                    <p className=" text-gray-800"><strong>Diskon : </strong>{item.discountPercentage}%</p>
                    <p className=" text-gray-800"><strong>Dimensi : </strong>{item.dimensions.height} X {item.dimensions.width} X {item.dimensions.depth} CM</p>
                    <p className="mb-2"><strong>Tags :</strong> 
                        {item.tags.map((tag,index)=>(
                            <span key={index} className=" bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full ml-2">
                                {tag}
                        </span>
                        ))}
                    </p>
                    <p className="text-xs text-gray-800"><strong>Stock : </strong>{item.stock} unit</p>
                </div>
            ))}
            
        </div>
        </div>
    )
}

