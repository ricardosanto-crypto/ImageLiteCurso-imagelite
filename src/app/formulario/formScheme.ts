import * as Yup from "yup";
export interface FormProps {
    name: string;
    tags: string;
    file: string | Blob;
}

export const formScheme: FormProps = {
    name: '',
    tags: '',
    file: ''
};

export const formValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('O nome é obrigatório')       
        .trim()
        .max(100, 'O nome deve ter no máximo 100 caracteres'),
    tags: Yup.string()
        .required('As tags são obrigatórias')
        .trim()
        .max(200, 'As tags devem ter no máximo 200 caracteres'),
    file: Yup.mixed<Blob>()
        .required('A imagem é obrigatória')
        .test('size', 'O tamanho da imagem deve ser menor que 5MB', (file) => {
            if (file instanceof Blob) {
                return file.size <= 5 * 1024 * 1024; // 5MB
            }
        })
        .test('type', 'O tipo da imagem deve ser JPEG ou PNG', (file) => {
            if (file instanceof Blob) {
                return file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
            }
        })
})