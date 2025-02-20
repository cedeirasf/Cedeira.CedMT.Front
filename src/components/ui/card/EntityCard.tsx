import { Link } from "@tanstack/react-router";

interface Props {
  title: string;
  pendientes: number;
  diferencias: number;
  ajustados: number;
  percentage: number;
  lastUpdate?: string;
}

export const EntityCard = ({
  title,
  pendientes,
  diferencias,
  ajustados,
  percentage,
  lastUpdate,
}: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-100 w-full max-w-md hover:border-gray-200">
      <Link to="/dashboard/$entity" params={{ entity: title }}>
        <div className="p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-6">{title}</h2>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Pendientes</p>
              <p className="text-2xl font-bold text-orange-500">{pendientes}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Diferencias</p>
              <p className="text-2xl font-bold text-red-500">{diferencias}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Ajustados</p>
              <p className="text-2xl font-bold text-gray-900">{ajustados}</p>
            </div>
          </div>

          <div className="relative aspect-square w-32 mx-auto mb-6">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                className="fill-none stroke-gray-100"
                strokeWidth="12"
                cx="50"
                cy="50"
                r="40"
              />
              <circle
                className="fill-none stroke-emerald-400"
                strokeWidth="12"
                cx="50"
                cy="50"
                r="40"
                strokeDasharray={`${percentage} 100`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-900">
                {percentage}%
              </span>
            </div>
          </div>

          {lastUpdate && (
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-red-400" />
              </div>
              <span>{lastUpdate}</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
