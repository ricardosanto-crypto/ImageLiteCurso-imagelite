'use client'
import { Button, InputText, Template, RenderIf } from "@/components";
import Link from "next/link";
import { useFormik } from "formik";
import { useState } from "react";

interface FormProps {
    name: string;
    tags: string;
    image: File | null;
}

const formScheme: FormProps = {
    name: '',
    tags: '',
    image: null
};

export default function FormularioPage() {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const formik = useFormik<FormProps>({
        initialValues: formScheme,
        onSubmit: (dados: FormProps) => {
            console.log("dados do formulário: ", dados);
        }
    });

    function onFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files?.[0];
            formik.setFieldValue("file", file);
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        }
    }

    return (
        <Template>
            <section className="flex flex-col items-center justify-center my-5">
                <h5 className="text-2xl font-bold mb-4">Nova Imagem</h5>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mt-5 grid grid-cols-1">
                        <label className="block text-sm font-medium leading-6 text-gray-700">Name: *</label>
                        <InputText id="name"
                            onChange={formik.handleChange}
                            placeholder="type the image's name" />
                    </div>
                    <div className="mt-5 grid grid-cols-1">
                        <label className="block text-sm font-medium leading-6 text-gray-700">Tags: *</label>
                        <InputText id="tags"
                            onChange={formik.handleChange}
                            placeholder="type the tags comma separated" />
                    </div>
                    <div className="mt-5 grid grid-cols-1">
                        <label className="block text-sm font-medium leading-6 text-gray-700">Image: *</label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed-gray-900/25 px-6 py-10">
                            <div className='text-center'>
                                <RenderIf condition={!imagePreview}>
                                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                            clipRule="evenodd" />
                                    </svg>
                                </RenderIf>
                                <RenderIf condition={!!imagePreview}>
                                    <img src={imagePreview!} width={250} alt="Image Preview" className="mx-auto h-32 w-32 object-cover rounded-md" />
                                </RenderIf>
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                        <span>Upload a file</span>
                                        <input onChange={onFileUpload} id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 flex items-center justify-end gap-x-4">
                        <Button style="bg-blue-500 hover:bg-blue-300" type="submit" label="Save" />
                        <Link href="/galeria">
                            <Button style="bg-red-500 hover:bg-red-300" label="Cancel" />
                        </Link>
                    </div>
                </form>
            </section>
        </Template>
    )
}