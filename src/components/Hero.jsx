import React from 'react'
import { Center, Button } from '@mantine/core'
import { useNavigate } from 'react-router'

const Hero = () => {

    const navigate = useNavigate();

    return (
        <Center>
            <section className="w-full flex justify-center items-center flex-col">
                <div className="text-center">
                    <h1 className="head_text" style={{ fontSize: 100, }}>
                        <span className="blue_gradient">Drop.</span>
                        <span className="pink_gradient">Files_in.</span>
                        <span className="orange_gradient">Web3.</span>
                    </h1>

                    <Center>

                        <h2 className='desc'>
                            Storing files on the IPFS blockchain with a smart contract built in
                            Filecoin Virtual Machine (FVM) is a secure and decentralized way to ensure data
                            integrity and accessibility. By breaking files into smaller chunks and
                            distributing them across a network of nodes, IPFS creates a resilient storage system.
                            Adding a smart contract built in FVM provides additional functionality and
                            allows for secure and automated management of the files.
                        </h2>
                    </Center>

                    <Center>
                    <div style={{padding: 40, }}>
                    <Button radius="lg" size="lg" variant="outline" color="gray" className='pink_gradient mx-2 '
                    onClick={() => navigate("/dashboard")}
                    >View Files</Button>
                    <Button radius="lg" size="lg"  className='pink_bg_gradient  mx-2' 
                    onClick={() => navigate("/dashboard")}
                    >Upload Files</Button>
                    </div>
                    </Center>
                </div>
            </section>
        </Center>
    )
}

export default Hero