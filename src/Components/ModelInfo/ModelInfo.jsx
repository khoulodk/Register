import { useParams } from "react-router-dom";  
import { useEffect, useState } from "react";  

const fakeModels = [  
  {  
    id: "1",  
    name: "Model Alpha",  
    description: "High-performance model for image classification.",  
    details: {  
      version: "1.0",  
      size: "140MB",  
      digest: "xk28a91k23",  
      format: "ONNX",  
      parameterSize: "2B",  
      releasedAt: "2025-04-01"  
    },  
  },  
];  

const tabs = ["Overview", "Providers", "Apps"];  

const ModelInfo = () => {  
  const { id } = useParams();  
  const [model, setModel] = useState(null);  
  const [loading, setLoading] = useState(true);  
  const [activeTab, setActiveTab] = useState("Overview");  

  useEffect(() => {  
    const foundModel = fakeModels.find((m) => m.id === id);  
    setTimeout(() => {  
      setModel(foundModel || null);  
      setLoading(false);  
    }, 600);  
  }, [id]);  

  if (loading) {  
    return (  
      <div className="min-h-screen flex items-center justify-center bg-gray-100">  
        <p className="text-gray-500 text-lg">Loading...</p>  
      </div>  
    );  
  }  

  if (!model) {  
    return (  
      <div className="min-h-screen flex items-center justify-center bg-gray-100">  
        <p className="text-gray-600 text-lg">Model not found.</p>  
      </div>  
    );  
  }  

  return (  
    <div className="min-h-screen bg-gray-50 p-6">  
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 my-5 font-sans">  
        <div className="flex justify-between items-center mb-4">  
          <h1 className="text-3xl font-bold text-gray-800">{model.name}</h1>  
          <div className="flex space-x-2">  
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-semibold shadow-md">  
              Chat  
            </button>  
            <button className="border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 px-5 py-2 rounded-md text-sm font-medium shadow-md">  
              Info  
            </button>  
          </div>  
        </div>  

        <p className="text-gray-600 my-5">{model.description}</p>  

        <div className="mt-2 text-sm text-gray-700">  
          <div className="flex font-medium items-center divide-x divide-gray-300 text-sm">  
            <div className="pr-2"><strong>Version:</strong> {model.details.version}</div>  
            <div className="px-2"><strong>Size:</strong> {model.details.size}</div>  
            <div className="px-2"><strong>Digest:</strong> {model.details.digest}</div>  
            <div className="px-2"><strong>Format:</strong> {model.details.format}</div>  
            <div className="px-2"><strong>Parameter Size:</strong> {model.details.parameterSize}</div>  
            <div className="pl-2"><strong>Released At:</strong> {model.details.releasedAt}</div>  
          </div>  
        </div>  

        <div className="border-b mt-4 mb-2">  
          <nav className="flex space-x-6">  
            {tabs.map((tab) => (  
              <button  
                key={tab}  
                onClick={() => setActiveTab(tab)}  
                className={`py-1 text-sm font-medium transition-colors duration-200 ease-in-out ${  
                  activeTab === tab  
                    ? "text-blue-600 border-b-2 border-blue-600"  
                    : "text-gray-500 hover:text-blue-600"  
                }`}  
              >  
                {tab}  
              </button>  
            ))}  
          </nav>  
        </div>  

        <div className="text-gray-700 text-sm leading-relaxed font-semibold">  
          {activeTab === "Overview" && <p>This is the overview of the model.</p>}  
          {activeTab === "Providers" && <p>Providers info will be listed here.</p>}  
          {activeTab === "Apps" && <p>Apps using this model will appear here.</p>}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default ModelInfo;