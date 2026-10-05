import * as Yup from "yup";
export interface FormProps {
    name: string;
    tags: string;
    file: any;
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
    file: Yup.mixed()
        .required('A imagem é obrigatória')
})