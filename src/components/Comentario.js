import react from 'react';
import './Comentario.css'

//JSX 
const Comentario = props => (
<div className = "Comentario">
    <p>{props.nome}</p>
    <p>{props.email}</p>
    <p>{props.children}</p>
    <p>{props.data.toString()}</p>
</div>
)






export default Comentario;