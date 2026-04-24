interface ImageCardProps {
    nome?:string;
    tamanho?:string;
    dataUpload?:string;
    src?:string;
    className?:string;
}

//export const ImageCard:React.FC<ImageCardProps> = (props: ImageCardProps) => {
export const ImageCard:React.FC<ImageCardProps> = ({
    nome, dataUpload, tamanho, src, className }: ImageCardProps
) => {
    return (
        <div className="card relative bg-white rounded-md shadow-md transition-trasform ease-in duration-300 transform hover:shadow-lg hover:translate-y-2">         
        <img src={src} alt={nome || ""} className={className} />
            <div className="card-body p-4">
                <h5 className="text-lg font-semibold mb-2 text-gray-600">{nome}</h5>
                <p className="text-gray-600">Tamanho: {tamanho}</p>
                <p className="text-gray-600">Data Upload: {dataUpload}</p>
            </div>
        </div>
    )
}