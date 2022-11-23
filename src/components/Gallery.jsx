import pexels1 from '../assets/pexels1.jpg'


const Gallery = () =>{
    return (
        <>
      <input type="file" name="photo" id="addPhotoInput" />
        <label htmlFor="addPhotoInput">
          <i className="add-photo-button fas fa-plus-square"></i>
          </label>

          <section className='gallery'>
            <div className='item'>
              <img src={pexels1} className ='item-image' alt="" />
      
              
            </div>
          </section>
        </>
 
    )
}

export default Gallery