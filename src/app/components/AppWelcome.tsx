'use client'

type AppWelcomeProps = {
    headTitle: string
    isShow: boolean;
}

export default function AppWelcome({headTitle, isShow}: AppWelcomeProps ){
    const currentYear = <p>2025</p>;
    const handleClick = () => {
        alert('Hello TypeScript')
    }

    return (
    <>
        <p>{headTitle}</p>
        <button className="bg-blue-700 p-3 m-3 text-white rounded-lg" onClick={handleClick}>ClickMe!</button>
        {currentYear}
        {
        isShow && <p>Date: 10/10/1998</p>
        }
        {
        isShow ? <p>Hello Next.js</p> : <p>Hello JavaScrip</p>
        }
    </>
    );
}