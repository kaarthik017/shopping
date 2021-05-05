

export default function Card(props){
    
   let isDisabled = props.disabled.some(disable => disable.key === props.data.key);
    return <>
    
    <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
         <img className="card-img-top" src="http://placehold.it/700x400" alt="" />
          <div className="card-body">
            <h4 className="card-title">
             {props.data.name}
            </h4>
            <h5>${props.data.price}</h5>
            <p className="card-text">{props.data.description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{props.data.rating}</small>
            <button type="button" className="btn btn-primary" disabled={isDisabled} onClick={()=>{
                props.buttonClick(props.data)
            }}>
            Add to Cart</button>
          </div>
        </div>
    </div> 
        
    </>
}