

function Email (params) {

    return(
        <section>
            <form action="">
                <div>
                    <label  htmlFor="correo">Correo</label>
                    <input id="correo" type="text" placeholder="Correo"/>
                </div>
                <div>
                    <label htmlFor="asunto">Asunto</label>
                    <input id="asunto" type="text" placeholder="Asunto"/>
                </div>
                <textarea name="" id="" placeholder="Menjases"></textarea>

            </form>
        </section>
    )
}
export default Email;