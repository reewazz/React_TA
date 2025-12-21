import './Hero.css'
export const ProductCard =  ({value})=>{
    return (
        <>
         <div className="card">
            <div className='image-border'>
            <img src={value.image} alt="" />

            </div>
            <h2>{value.name}</h2>
            <h4>$ {value.price}</h4>
        </div>
        </>
    )
}