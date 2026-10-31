'use client'

import { Template, RenderIf, InputText } from "@/components"
import { useState } from "react"

export default function Login() {
    const [loading, setLoading] = useState<boolean>(false);
    const [newUserState, setNewUserState] = useState<boolean>(true);
    return (
        <Template loading={loading}>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {newUserState ? "Create an account" : "Sign in to your account"}
                    </h2>
                </div>
                <div className="mt-10sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <RenderIf condition={newUserState}>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Name:</label>
                                <div className="mt-2">
                                    <InputText style="w-full"
                                        id="name" />
                                </div>
                            </div>
                        </RenderIf>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">E-mail:</label>
                            <div className="mt-2">
                                <InputText style="w-full"
                                    id="email" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Password:</label>
                            <div className="mt-2">
                                <InputText style="w-full"
                                    type="password"
                                    id="password" />
                            </div>
                        </div>
                        <RenderIf condition={newUserState}>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Repeat Password:</label>
                            <div className="mt-2">
                                <InputText style="w-full"
                                    type="password"
                                    id="repeatPassword" />
                            </div>
                        </div>
                    </RenderIf>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>

        </div>
        </Template >
    )
}

