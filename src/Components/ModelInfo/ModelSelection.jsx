import { Link } from 'react-router-dom';

const models = [
  { id: 1, name: "Model 1", description: "Description for model 1" },
  { id: 2, name: "Model 2", description: "Description for model 2" },
  { id: 3, name: "Model 3", description: "Description for model 3" },
];

const ModelSelection = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Choose a Model</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {models.map((model) => (
          <Link 
            to={`/model/${model.id}`} 
            key={model.id} 
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{model.name}</h2>
            <p className="text-gray-600">{model.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ModelSelection;
