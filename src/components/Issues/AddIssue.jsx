"use client"
import { useState } from 'react';
import Image from 'next/image';
import CustomInput from '../common/CustomInput';

export default function AddTodo({ addNewIssue }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('open');
    const [priority, setPriority] = useState('low');
    const [error, setError] = useState('');

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        setError('');
        setTitle('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '') {
            setError('Title is required.');
            return;
        }

        addNewIssue({ title, status, priority });
        toggleModal();
    }

    return (
        <div>
            <div className="flex items-center p-2 bg-gray-mw-600">
                <div className=" flex items-center space-x-2 ml-3 sm:ml-5 md:ml-6 lg:ml-8 text-13">
                    <Image src="/images/open-icon.svg" alt="todo" width={14} height={14} />
                    <span className="font-medium">Todo</span>
                    <span className="text-gray-mw-200">10</span>
                </div>
                <button className='ml-24 rounded-md cursor-pointer hover:bg-gray-mw-500 duration-200 p-1' onClick={toggleModal}>
                    <Image src="/images/plus-icon.svg" alt="Add Todo" width={11} height={11} />
                </button>
            </div>

            {/* add issue modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-gray-mw-600 sm:p-6 p-4 rounded-lg sm:w-96 w-80">
                        <h2 className="mb-4 text-13">Add Todo</h2>
                        {error && <p className="text-red-500 text-xs">{error}</p>}

                        {/* add issue form */}
                        <form className='text-13' onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-mw-200  mb-2">Title</label>
                                <CustomInput
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter title"
                                    className="w-full p-2 bg-gray-mw-700 hover:bg-gray-mw-500 border border-gray-500 outline-none" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-mw-200  mb-2">Status</label>
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className=" w-full p-2 rounded-sm bg-gray-mw-700 hover:bg-gray-mw-500 border border-gray-500 outline-none">
                                    <option value="open">Open</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-mw-200  mb-2">Priority</label>
                                <select
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}
                                    className=" w-full p-2 rounded-sm bg-gray-mw-700 hover:bg-gray-mw-500 border border-gray-500 outline-none">
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                    <option value="lowest">Lowest</option>
                                    <option value="warning">Warning</option>
                                </select>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button type="button" onClick={toggleModal} className="px-4 py-2 bg-gray-mw-300 hover:bg-gray-mw-500 rounded">
                                    Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 border border-gray-mw-200 bg-gray-mw-400 hover:bg-gray-mw-600 duration-200 rounded">
                                    Add Todo
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
