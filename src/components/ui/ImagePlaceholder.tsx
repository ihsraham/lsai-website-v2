import { cn } from './Button'; // reuse cn utility

interface ImagePlaceholderProps {
  id: number;
  width?: string; /* e.g. "w-full" or "w-[300px]" */
  height?: string; /* e.g. "h-[200px]" */
  alt?: string;
  className?: string;
  promptReference?: string;
}

export function ImagePlaceholder({ id, width = 'w-full', height = 'h-64', alt, className, promptReference }: ImagePlaceholderProps) {
  return (
    <div className={cn('relative bg-lsai-gray-200 border-2 border-dashed border-lsai-gray-600 flex flex-col items-center justify-center text-center p-4', width, height, className)}>
      <span className="text-4xl font-bold text-lsai-gray-600 mb-2">IMAGE {id}</span>
      {alt && <span className="text-sm font-medium text-lsai-black">{alt}</span>}
      {promptReference && <span className="text-xs text-gray-500 mt-1 max-w-[80%]">Ref: {promptReference}</span>}
    </div>
  );
}
