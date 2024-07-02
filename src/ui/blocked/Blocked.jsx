import React, { useState, useEffect } from 'react';

function Blocked() {
    const [blockedUrls, setBlockedUrls] = useState(() => {
        const savedUrls = localStorage.getItem("blockedUrls");
        return savedUrls ? JSON.parse(savedUrls) : [];
    });
    const [newUrl, setNewUrl] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {

        chrome.storage.local.remove('blockedUrls', function() {console.log("storage removed")})
        localStorage.setItem("blockedUrls", JSON.stringify(blockedUrls));
        chrome.storage.local.set({blockedUrls : blockedUrls}, function(){
            try {
                console.log(`${blockedUrls} added to chrome storage`)
            } catch (error) {
                console.log(`error:${error}`)
            }
        })

       


    }, [blockedUrls]);

    const handleAddUrl = () => {
        const trimmedUrl =  newUrl.trim();
        const hasSpaces = /\s/.test(trimmedUrl);

        if (!trimmedUrl) {
            setError('URL cannot be empty or just spaces.');
            alert('URL cannot be empty or just spaces.')
            return;
        }

        if (hasSpaces) {
            setError('URL cannot contain spaces.');
            alert('URL cannot contain spaces.')
            return;
        }

        if (blockedUrls.includes(trimmedUrl)) {
            setError('URL is already in the blocked list.');
            alert('URL is already in the blocked list.')
            return;
        }

        setBlockedUrls([...blockedUrls, trimmedUrl]);
        setNewUrl(''); 
        setError(''); 
    };

    const handleRemoveUrl = (index) => {
        const updatedUrls = blockedUrls.filter((_, i) => i !== index);
        setBlockedUrls(updatedUrls);
    };


    //hi

    
    


    return (
        <div className='flex justify-between w-full'>
            <div className='text-7xl leading-normal font-bold'>
                <div>This site is</div>
                <div><span className='text-9xl bg-white text-slate-950 tracking-wide hover:tracking-wider duration-500'>Blocked.</span></div>
            </div>
            <div className='w-1/2 rounded-md py-4 px-6 h-auto'>
                <div className='w-full bg-white text-slate-900 rounded-md py-4 px-6 h-auto shadow-2xl'>
                    <div><span className='text-xl'>Blocked Site list</span></div>
                    {blockedUrls.length === 0 ? (
                        <div>No Blocked sites !!</div>
                    ) : (
                        blockedUrls.map((item, index) => (
                            <div key={index} className='flex items-start mt-5 gap-4 w-full'>
                                <div>{index + 1}.</div>
                                <div className='flex justify-between w-9/12'>
                                    <div className='texl-lg font-mono'>{item}</div>
                                    <div>
                                        <button
                                            className='ml-2 px-4 py-1 bg-red-500 text-white rounded mt-2'
                                            onClick={() => handleRemoveUrl(index)}
                                        >
                                            Unblock
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className='mt-5 text-xl'>
                    <div className='font-light tracking-wide'>Enter  URL to block the site:</div>
                    <input
                        type="text"
                        className='px-2 mt-2 text-slate-950 font-sans text-[15px] rounded-sm'
                        value={newUrl}
                        onChange={(e) => setNewUrl(e.target.value)}
                    />
                    <button
                        className='ml-2 px-4 py-1 bg-blue-500 text-white rounded mt-2'
                        onClick={handleAddUrl}
                    >
                        Add URL
                    </button>
                    {error && <div className='text-red-500 mt-2'>{error}</div>}
                </div>
            </div>
        </div>
    );
}

export default Blocked;
