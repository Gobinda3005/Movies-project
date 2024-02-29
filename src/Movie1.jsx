function Movie1 (props)
{
    const {title,url}=props
    return(
        <div className="Movie1">
            <img 
            src={url}
               alt='Movies1'
            />
            <h4>{title}</h4>
        </div>
    )
}
export default Movie1;