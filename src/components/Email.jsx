import { useState } from "react";


function Email (params) {
    

    const [correo,setCorreo]=useState("")
    const [asunto,setAsunto]=useState("")
    const [mensaje,setMensaje]=useState("")

  
    return(
        <section className="cont-email">
            <form action="Post" className="form-email">
                <div className="cont-correo">
                    <label  htmlFor="correo">Correo</label>
                    <input id="correo" type="text" placeholder="Correo"/>
                </div>
                <div className="cont-asunto">
                    <label htmlFor="asunto">Asunto</label>
                    <input id="asunto" type="text" placeholder="Asunto"/>
                </div>
                <textarea  className="text-mensaje"name="" id="" placeholder="Menjases"></textarea>
                <button className="btn-enviar"><i className='bx bxs-send'></i></button>
            </form>
        </section>
    )
}
export default Email;