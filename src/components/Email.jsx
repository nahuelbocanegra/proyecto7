import { useState } from "react";


function Email (params) {

    const [sent,setSent]=useState(false)
    

    const [correo,setCorreo]=useState("")
    const [asunto,setAsunto]=useState("")
    const [mensaje,setMensaje]=useState("")

    const time=()=>{

        setTimeout(()=>{
            setSent(false)        
        },3000)
    }


    
    const initialcontent=()=>{
        setAsunto("")
        setCorreo("")
        setMensaje("")
        setSent(true)
        time()
    }

  
    return(
        <>
        <section className="cont-email">
            {sent? <div className="check"><i className='bx bx-check'></i></div> : 
            

            <form action="" className="form-email">
                <div className="cont-correo">
                    <label  htmlFor="correo">Correo</label>
                    <input value={correo} onChange={e => setCorreo(e.target.value)} id="correo" type="email" />
                </div>
                <div className="cont-asunto">
                    <label htmlFor="asunto">Asunto</label>
                    <input value={asunto} onChange={e => setAsunto(e.target.value)} id="asunto" type="text" />
                </div>
                <textarea  value={mensaje} onChange={e => setMensaje(e.target.value)} className="text-mensaje"name="" id="" placeholder="Menjases"></textarea>
                <button className="btn-enviar" onClick={initialcontent}><i className='bx bxs-send'></i></button>
            </form>
        }
        </section>
        </>
    )
}
export default Email;