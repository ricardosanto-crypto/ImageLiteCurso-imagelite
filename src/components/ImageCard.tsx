'use Client'
interface ImageCardProps {
    nome?:string;
    tamanho?:number;
    dateUpload?:string;
    src?:string;
    className?:string;
    extension?:string;
}

//export const ImageCard:React.FC<ImageCardProps> = (props: ImageCardProps) => {
export const ImageCard:React.FC<ImageCardProps> = ({
    nome, tamanho, dateUpload, src, className, extension }: ImageCardProps
) => {

    function download() {
        window.open(src, "_blank");
    }

    function formatBytes(bytes: number = 0, decimals = 2) {
        if (!+bytes) return '0 Bytes'
        const k = 104
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB']

        const i = Math.floor(Math.log(bytes) / Math.log(k))

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }

    return (
        <div className="card relative bg-white rounded-md shadow-md transition-trasform ease-in duration-300 transform hover:shadow-lg hover:translate-y-2">         
            <img onClick={download} src={src} alt={nome || ""} className={className} />
            <div className="card-body p-4">
                <h5 className="text-lg font-semibold mb-2 text-gray-600">{nome}</h5>
                <p className="text-gray-600">Tamanho: {formatBytes(tamanho)}</p>
                <p className="text-gray-600">Data Upload: {dateUpload}</p>
                <p className="text-gray-600">Extensão: {extension}</p>
            </div>
        </div>
    )
}