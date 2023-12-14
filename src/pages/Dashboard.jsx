import React from 'react';
import './dashboard.css';
import user1 from '../assets/subodh1.jpeg';


const Dashboard = () => {



    return (
        <>
            <section className="dashboard">
                <div className="container">
                    <div className="c1 main">
                        <div className="r1 glass">
                            <div className="profile-photo">
                                <img src={user1} alt=" " />
                            </div>
                            <div className="details">
                                <div className="name">
                                    <h1>Subodh Gaikwad</h1>
                                </div>
                                <div className="email">
                                    <h1>subodhgaikwad70@gmail.com</h1>
                                </div>
                            </div>
                        </div>
                        <div className="r2 ">
                            <div className="c1 glass">
                                <h1>Indicators</h1>
                                <h2>5</h2>
                            </div>
                            <div className="c2 glass">
                                <h1>Bots</h1>
                                <h2>3</h2>
                            </div>
                        </div>
                    </div>
                    <div className="updates text-center glass">
                        <h1>Updates</h1>

                    </div>
                </div>
            </section>

            <section className="history ">
                <div className="container glass flex-col hidden">
                    <h1 className=' ml-6 text-lg  font-bold' >History</h1>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light">
                                        <thead className="border bg-slate-900 font-medium dark:border-neutral-500">
                                            <tr>
                                                {/* <th scope="col" className="px-6 py-4"></th> */}
                                                <th scope="col" className="px-6 w-60 py-4">Name</th>
                                                <th scope="col" className="px-4 py-4">Price</th>
                                                <th scope="col" className="px-4 py-4">Started On</th>
                                                <th scope="col" className="px-4 py-4">Exprire On</th>
                                                <th scope="col" className="px-4 py-4">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b dark:border-neutral-500 hover:backdrop-blur-lg cursor-pointer">
                                                {/* <td className="whitespace-nowrap px-6 py-4 font-medium">1</td> */}
                                                <td className="whitespace-nowrap px-6 py-4">SSVG 1</td>
                                                <td className="whitespace-nowrap px-4 py-4">$79</td>
                                                <td className="whitespace-nowrap px-4 py-4">19-06-2023</td>
                                                <td className="whitespace-nowrap px-4 py-4">01-01-2024</td>
                                                <td className="whitespace-nowrap px-4 py-4 items-center text-center"><h3 className=' bg-green-700 font-bold rounded-2xl p-2 w-24' >Paid</h3></td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard