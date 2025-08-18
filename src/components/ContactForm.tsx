"use client"

import React, { useState } from "react"
import axios from "axios"

const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    type alert = 'success' | 'error' | null ; 

    const[alert, setAlert] = useState<alert>(null);

    const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await axios.post("/api/mails", { name, email, message })
            console.log("Response:", response.data)

            setEmail('');
            setName('');
            setMessage('');



        } catch (error) {
            console.error("Failed sending message:", error)
        }
    }

    return (
        <div className="right text-white w-1/2 p-6 flex flex-col gap-4">
            <p className="text-2xl font-semibold border-b border-gray-600 pb-2">
                Send me a direct mail
            </p>

            <div className="form flex flex-col gap-4 border border-gray-600/80 bg-black/30 p-4 rounded-lg">
                <form onSubmit={submitData}>
                    <label className="flex flex-col gap-1 text-lg font-medium text-gray-300">
                        Name
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="bg-black/50 text-white p-2 rounded-md border border-gray-600 focus:border-gray-400 outline-none text-sm"
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-lg mt-5 font-medium text-gray-300">
                        Email
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-black/50 text-white p-2 rounded-md border border-gray-600 focus:border-gray-400 outline-none text-sm"
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-lg font-medium text-gray-300 mt-5">
                        Message
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="bg-black/50 text-white p-2 rounded-md border border-gray-600 focus:border-gray-400 outline-none text-sm"
                            rows={4}
                        />
                    </label>

                    <button
                        type="submit"
                        className="border mt-5 border-gray-400 px-4 py-2 rounded-md hover:bg-white hover:text-black text-sm
                                    cursor-pointer hover:scale-110 active:scale-100 transition-all duration-200 ease-in-out"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
