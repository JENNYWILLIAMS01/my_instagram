import profileIcon from '../assets/instagramprofile.png'
const Bio = () => {
    const editForm = (
        <form className='edit-bio-form'>
            <input type="text" id="" placeholder='Your name'/>
            <input type="text" id="" placeholder='About you'/>
            <br />
            <button type="button" className="cancel-button">
            Cancel
            </button>
            <button type="button" >Save</button>
        </form>
    )
    return (
        <section className='bio'>
        <div className='profile-photo' role="button"  title="click to edit photo">
            <img src={profileIcon}alt="profile" />
        </div>
        <div className='profile-info'>
            <p className='name'> Williams Omotola</p>
            <p className='about'>Hey yo it's your girl Omaposh🥵</p>
            <p>CardibardiAddict🥶</p>
            <p>A TikToker🥰</p>
            <p>A Modella🥂</p>
            <p>Content Creator😎</p>
            <p>I'M too glam to give damn please🎙</p>
            <p>In all of this i'm a junior developer🤪🤪</p>
            <p>I'm a FRONTEND✨</p>
            <p>Period🎤</p>
            <button>Edit</button>
            {editForm}
        </div>
        </section>
    )


}

export default Bio