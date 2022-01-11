import './LandingPage.css'

const LandingPage = () => {
    return (
        <>
        <div className="landing-page-whole">
            <div className='landing-page-1'>
                    <h1>Tame your work, organize your life</h1>
                    <h1>Welcome to EverNote!</h1>
                    <h3>Remember everything and tackle any project with your notes, tasks, and schedule all in one place.</h3>
            </div>
            <div className='landing-page-2'>
                <img src='/images/lightbulb.jpeg'/>
                <img src='/images/notebookpic.jpeg'/>
            </div>
            <div className='landing-page-3'>
                <img src='/images/stickynotes.jpeg'/>
                <img src='/images/diary.jpeg'/>
            </div>
            <div className="landing-page-footer">
                <p>Matthew Satterwhite</p>
                <a href="https://github.com/MatthewSatt">Github</a>
            </div>
        </div>
        </>
    )
}


export default LandingPage
